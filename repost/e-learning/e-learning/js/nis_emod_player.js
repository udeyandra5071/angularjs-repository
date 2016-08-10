if (window.webshim) {
    (function () {
        
        webshim.setOptions('mediaelement', {
            replaceUI: 'auto'
        });
        webshim.setOptions({types: 'range'});
        webshim.setOptions('extendNative', true);
        webshim.polyfill('mediaelement forms forms-ext');
    })();
}


//add some controls
jQuery(function ($) {
    $('div.player').each(function () {
        var player = this;
        var getSetCurrentTime = createGetSetHandler(

        function () {
            $('input.time-slider', player).prop('value', $.prop(this, 'currentTime'));
        }, function () {
            try {
                $('video, audio', player).prop('currentTime', $.prop(this, 'value'));
            } catch (er) {}
        });
        var getSetVolume = createGetSetHandler(

        function () {
            $('input.volume-slider', player).prop('value', $.prop(this, 'volume'));

        }, function () {
            $('video, audio', player).prop('volume', $.prop(this, 'value'));
        });
        $('video, audio', this).bind('durationchange updateMediaState', function () {
            var duration = $.prop(this, 'duration');
            if (!duration) {
                return;
            }
            $('input.time-slider', player).prop({
                'max': duration,
                disabled: false
            });
            $('span.duration', player).text(duration);
        }).bind('progress updateMediaState', function () {
            var buffered = $.prop(this, 'buffered');
            if (!buffered || !buffered.length) {
                return;
            }
            buffered = getActiveTimeRange(buffered, $.prop(this, 'currentTime'));
            $('span.progress', player).text(buffered[2]);
        }).bind('timeupdate', function () {
            $('span.current-time', player).text($.prop(this, 'currentTime'));
        }).bind('timeupdate', getSetCurrentTime.get).bind('emptied', function () {
            $('input.time-slider', player).prop('disabled', true);
            $('span.duration', player).text('--');
            $('span.current-time', player).text(0);
            $('span.network-state', player).text(0);
            $('span.ready-state', player).text(0);
            $('span.paused-state', player).text($.prop(this, 'paused'));
            $('span.height-width', player).text('-/-');
            $('span.progress', player).text('0');
        }).bind('waiting playing loadedmetadata updateMediaState', function () {
            $('span.network-state', player).text($.prop(this, 'networkState'));
            $('span.ready-state', player).text($.prop(this, 'readyState'));
        }).bind('play pause', function () {
            $('span.paused-state', player).text($.prop(this, 'paused'));
        }).bind('volumechange', function () {
            var muted = $.prop(this, 'muted');
            $('span.muted-state', player).text(muted);
            $('input.muted', player).prop('checked', muted);
            $('span.volume', player).text($.prop(this, 'volume'));
        }).bind('volumechange', getSetVolume.get).bind('play pause', function () {
            $('span.paused-state', player).text($.prop(this, 'paused'));
        }).bind('loadedmetadata updateMediaState', function () {
            $('span.height-width', player).text($.prop(this, 'videoWidth') + '/' + $.prop(this, 'videoHeight'));
        }).each(function () {
            if ($.prop(this, 'readyState') > $.prop(this, 'HAVE_NOTHING')) {
                $(this).triggerHandler('updateMediaState');
            }
        });

        $('input.time-slider', player).bind('input', getSetCurrentTime.set).prop('value', 0);
        $('input.volume-slider', player).bind('input', getSetVolume.set);

        $('input.play', player).bind('click', function () {
            $('video, audio', player)[0].play();
        });
        $('input.pause', player).bind('click', function () {
            $('video, audio', player)[0].pause();
        });
        $('input.muted', player).bind('click updatemuted', function () {
            $('video, audio', player).prop('muted', $.prop(this, 'checked'));
        }).triggerHandler('updatemuted');
        $('input.controls', player).bind('click', function () {
            $('video, audio', player).prop('controls', $.prop(this, 'checked'));
        }).prop('checked', true);

        $('select.load-media', player).bind('change', function () {
            var srces = $('option:selected', this).data('src');
            if (srces) {
                //the following code can be also replaced by the following line
                //$('video, audio', player).loadMediaSrc(srces).play();
                $('video, audio', player).removeAttr('src').find('source').remove().end().each(function () {
                    var mediaElement = this;
                    if (typeof srces == 'string') {
                        srces = [srces];
                    }
                    $.each(srces, function (i, src) {

                        if (typeof src == 'string') {
                            src = {
                                src: src
                            };
                        }
                        $(document.createElement('source')).attr(src).appendTo(mediaElement);
                    });
                })[0].load();
                $('video, audio', player)[0].play();
            }
        }).prop('selectedIndex', 0);
    });
});

//helper for createing throttled get/set functions (good to create time/volume-slider, which are used as getter and setter)

function createGetSetHandler(get, set) {
    var throttleTimer;
    var blockedTimer;
    var blocked;
    return {
        get: function () {
            if (blocked) {
                return;
            }
            return get.apply(this, arguments);
        },
        set: function () {
            clearTimeout(throttleTimer);
            clearTimeout(blockedTimer);

            var that = this;
            var args = arguments;
            blocked = true;
            throttleTimer = setTimeout(function () {
                set.apply(that, args);
                blockedTimer = setTimeout(function () {
                    blocked = false;
                }, 30);
            }, 0);
        }
    };
};

function getActiveTimeRange(range, time) {
    var len = range.length;
    var index = -1;
    var start = 0;
    var end = 0;
    for (var i = 0; i < len; i++) {
        if (time >= (start = range.start(i)) && time <= (end = range.end(i))) {
            index = i;
            break;
        }
    }
    return [index, start, end];
};