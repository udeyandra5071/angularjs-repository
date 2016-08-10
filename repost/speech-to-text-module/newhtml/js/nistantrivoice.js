﻿/**
 * @license ResponsiveVoice JS v1.3.7
 *
 * (c) 2015 LearnBrite
 *
 * License: http://responsivevoice.org/license
 */

if (typeof responsiveVoice != 'undefined') {
    console.log('ResponsiveVoice already loaded');
    console.log(responsiveVoice);
} else {

    var ResponsiveVoice = function () {

        var self = this;

        self.version = "1.3.7";
        console.log("ResponsiveVoice r" + self.version);

        // Our own collection of voices
        self.responsivevoices = [
            {name: 'UK English Female', voiceIDs: [3, 5, 1, 6, 7, 8]},
            {name: 'UK English Male', voiceIDs: [0, 4, 2, 6, 7, 75, 8]},
            {name: 'US English Female', voiceIDs: [39, 40, 41, 42, 43, 44]},
            {name: 'Spanish Female', voiceIDs: [19, 16, 17, 18, 20, 76, 15]},
            {name: 'French Female', voiceIDs: [21, 22, 23, 77, 26]},
            {name: 'Deutsch Female', voiceIDs: [27, 28, 29, 30, 31, 78, 32]},
            {name: 'Italian Female', voiceIDs: [33, 34, 35, 36, 37, 79, 38]},
            {name: 'Greek Female', voiceIDs: [62, 63, 80, 64]},
            {name: 'Hungarian Female', voiceIDs: [9, 10, 81, 11]},
            {name: 'Turkish Male', voiceIDs: [69, 70, 82, 71]},
            {name: 'Russian Female', voiceIDs: [47,48,83, 49]},
            {name: 'Dutch Female', voiceIDs: [84, 157, 158, 45]},
            {name: 'Swedish Female', voiceIDs: [85, 148, 149, 65]},
            {name: 'Norwegian Female', voiceIDs: [72, 73, 74]},
            {name: 'Japanese Female', voiceIDs: [50, 51, 52, 153, 53]},
            {name: 'Korean Female', voiceIDs: [54, 55, 56, 156, 57]},
            {name: 'Chinese Female', voiceIDs: [58, 59, 60, 155, 61]},
            {name: 'Hindi Female', voiceIDs: [66, 154, 67]},
            {name: 'Serbian Male', voiceIDs: [12]},
            {name: 'Croatian Male', voiceIDs: [13]},
            {name: 'Bosnian Male', voiceIDs: [14]},
            {name: 'Romanian Male', voiceIDs: [151, 150, 152, 46]},
            {name: 'Catalan Male', voiceIDs: [68]},
            {name: 'Australian Female', voiceIDs: [87,86,5,88]},
            {name: 'Finnish Female', voiceIDs: [90,89,91,92]},
            {name: 'Afrikans Male', voiceIDs: [93]},
            {name: 'Albanian Male', voiceIDs: [94]},
            {name: 'Arabic Male', voiceIDs: [96,95,97,98]},
            {name: 'Armenian Male', voiceIDs: [99]},
            {name: 'Czech Female', voiceIDs: [101,100,102,103]},
            {name: 'Danish Female', voiceIDs: [105,104,106,107]},
            {name: 'Esperanto Male', voiceIDs: [108]},
            {name: 'Hatian Creole Female', voiceIDs: [109]},
            {name: 'Icelandic Male', voiceIDs: [110]},
            {name: 'Indonesian Female', voiceIDs: [111,112,113]},
            {name: 'Latin Female', voiceIDs: [114]},
            {name: 'Latvian Male', voiceIDs: [115]},
            {name: 'Macedonian Male', voiceIDs: [116]},
            {name: 'Modavian Male', voiceIDs: [117]},
            {name: 'Montenegrin Male', voiceIDs: [118]},
            {name: 'Polish Female', voiceIDs: [120,119,121,122]},
            {name: 'Brazilian Portuguese Female', voiceIDs: [124,123,125,126]},
            {name: 'Portuguese Female', voiceIDs: [128,127,129,130]},
            {name: 'Serbo-Croation Male', voiceIDs: [131]},
            {name: 'Slovak Female', voiceIDs: [133,132,134,135]},
            {name: 'Spanish Latin American Female', voiceIDs: [137,136,138,139]},
            {name: 'Swahili Male', voiceIDs: [140]},
            {name: 'Tamil Male', voiceIDs: [141]},
            {name: 'Thai Female', voiceIDs: [143,142,144,145]},
            {name: 'Vietnamese Male', voiceIDs: [146]},
            {name: 'Welsh Male', voiceIDs: [147]},
            {name: 'Fallback UK Female', voiceIDs: [8]}

        ];

        //All voices available on every system and device
        self.voicecollection = [
            {name: 'Google UK English Male'}, //0 male uk android/chrome
            {name: 'Agnes'}, //1 female us safari mac
            {name: 'Daniel Compact'}, //2 male us safari mac

            {name: 'Google UK English Female'}, //3 female uk android/chrome
            {name: 'en-GB', rate: 0.25, pitch: 1}, //4 male uk IOS
            {name: 'en-AU', rate: 0.25, pitch: 1}, //5 female english IOS
            
            {name: 'inglés Reino Unido'}, //6 spanish english android
            {name: 'English United Kingdom'}, //7 english english android
            {name: 'Fallback en-GB Female', lang: 'en-GB', fallbackvoice: true}, //8 fallback english female
            
            {name: 'Eszter Compact'}, //9 Hungarian mac 
            {name: 'hu-HU', rate: 0.4}, //10 Hungarian iOS
            {name: 'Fallback Hungarian', lang: 'hu', fallbackvoice: true}, //11 Hungarian fallback

            {name: 'Fallback Serbian', lang: 'sr', fallbackvoice: true}, //12 Serbian fallback

            {name: 'Fallback Croatian', lang: 'hr', fallbackvoice: true}, //13 Croatian fallback		

            {name: 'Fallback Bosnian', lang: 'bs', fallbackvoice: true}, //14 Bosnian fallback	

            {name: 'Fallback Spanish', lang: 'es', fallbackvoice: true}, //15 Spanish fallback						
            {name: 'Spanish Spain'}, //16 female es android/chrome		
            {name: 'español España'}, //17 female es android/chrome	
            {name: 'Diego Compact', rate: 0.3}, //18 male es mac
            {name: 'Google Español'}, //19 male es chrome				
            {name: 'es-ES', rate: 0.20}, //20 male es iOS

            {name: 'Google Français'}, //21 FR chrome				
            {name: 'French France'}, //22 android/chrome		
            {name: 'francés Francia'}, //23 android/chrome	
            {name: 'Virginie Compact', rate: 0.5}, //24 mac
            {name: 'fr-FR', rate: 0.25}, //25 iOS		
            {name: 'Fallback French', lang: 'fr', fallbackvoice: true}, //26 fallback								

            {name: 'Google Deutsch'}, //27 DE chrome				
            {name: 'German Germany'}, //28 android/chrome		
            {name: 'alemán Alemania'}, //29 android/chrome	
            {name: 'Yannick Compact', rate: 0.5}, //30 mac
            {name: 'de-DE', rate: 0.25}, //31 iOS		
            {name: 'Fallback Deutsch', lang: 'de', fallbackvoice: true}, //32 fallback			

            {name: 'Google Italiano'}, //33 IT chrome				
            {name: 'Italian Italy'}, //34 android/chrome		
            {name: 'italiano Italia'}, //35 android/chrome	
            {name: 'Paolo Compact', rate: 0.5}, //36 mac
            {name: 'it-IT', rate: 0.25}, //37 iOS		
            {name: 'Fallback Italian', lang: 'it', fallbackvoice: true}, //38 fallback								

            {name: 'Google US English', timerSpeed:1}, //39 EN chrome				
            {name: 'English United States'}, //40 android/chrome		
            {name: 'inglés Estados Unidos'}, //41 android/chrome	
            {name: 'Vicki'}, //42 mac
            {name: 'en-US', rate: 0.2, pitch: 1, timerSpeed:1.3}, //43 iOS		
            {name: 'Fallback English', lang: 'en-US', fallbackvoice: true, timerSpeed:0}, //44 fallback										
            {name: 'Fallback Dutch', lang: 'nl', fallbackvoice: true, timerSpeed:0}, //45 fallback

            {name: 'Fallback Romanian', lang: 'ro', fallbackvoice: true}, //46 Romanian Male fallback	

            {name: 'Milena Compact'}, //47 Russian mac 
            {name: 'ru-RU', rate: 0.25}, //48 iOS		
            {name: 'Fallback Russian', lang: 'ru', fallbackvoice: true}, //49 Russian fallback	

            {name: 'Google 日本人', timerSpeed:1}, //50 JP Chrome 
            {name: 'Kyoko Compact'}, //51 Japanese mac 
            {name: 'ja-JP', rate: 0.25}, //52 iOS		
            {name: 'Fallback Japanese', lang: 'ja', fallbackvoice: true}, //53 Japanese fallback	

            {name: 'Google 한국의', timerSpeed:1}, //54 KO Chrome 
            {name: 'Narae Compact'}, //55 Korean mac 
            {name: 'ko-KR', rate: 0.25}, //56 iOS		
            {name: 'Fallback Korean', lang: 'ko', fallbackvoice: true}, //57 Korean fallback	

            {name: 'Google 中国的', timerSpeed:1}, //58 CN Chrome 
            {name: 'Ting-Ting Compact'}, //59 Chinese mac 
            {name: 'zh-CN', rate: 0.25}, //60 iOS		
            {name: 'Fallback Chinese', lang: 'zh-CN', fallbackvoice: true}, //61 Chinese fallback	

            {name: 'Alexandros Compact'}, //62 Greek Male Mac 
            {name: 'el-GR', rate: 0.25}, //63 iOS		
            {name: 'Fallback Greek', lang: 'el', fallbackvoice: true}, //64 Greek Female fallback	

            {name: 'Fallback Swedish', lang: 'sv', fallbackvoice: true}, //65 Swedish Female fallback	

            {name: 'hi-IN', rate: 0.25}, //66 iOS		
            {name: 'Fallback Hindi', lang: 'hi', fallbackvoice: true}, //67 Hindi Female fallback	

            {name: 'Fallback Catalan', lang: 'ca', fallbackvoice: true}, //68 Catalan Male fallback	

            {name: 'Aylin Compact'}, //69 Turkish Male Mac 
            {name: 'tr-TR', rate: 0.25}, //70 iOS Turkish Female	
            {name: 'Fallback Turkish', lang: 'tr', fallbackvoice: true}, //71 Turkish Male fallback	

            {name: 'Stine Compact'}, //72 Norweigan Male Mac 

            {name: 'no-NO', rate: 0.25}, //73 iOS Female		
            {name: 'Fallback Norwegian', lang: 'no', fallbackvoice: true}, //74 Norwegian Female fallback
            
            {name: 'Daniel'}, //75 English UK male uk safari 8 mac	
            {name: 'Monica'}, //76 Spanish female es safari 8 mac
            {name: 'Amelie'}, //77 French Canadian female fr safari 8 mac
            {name: 'Anna'}, //78 female de safari 8 mac
            {name: 'Alice'}, //79 Italian female it safari 8 mac
            {name: 'Melina'}, //80 Greek female gr safari 8 mac
            {name: 'Mariska'}, //81 Hungarian female hu safari 8 mac
            {name: 'Yelda'}, //82 Turkish female tr safari 8 mac
            {name: 'Milena'}, //83 Russian female ru safari 8 mac

            //Gender Disparity
            {name: 'Xander'}, //84 Dutch female nl safari 8 mac
            {name: 'Alva'},  //85 Swedish female sv safari 8 mac

            // Gender Disparity
            {name: 'Lee Compact'}, //86 Australian Male Mac 
            {name: 'Karen'}, //87 Australian Female safari 8 mac 
            {name: 'Fallback Australian', lang: 'en-AU', fallbackvoice: true}, //88 Australian Female fallback	

            // Gender Disparity
            {name: 'Mikko Compact'}, //89 Finnish Male Mac 
            {name: 'Satu'}, //90 Finnish Female safari 8 mac 
            {name: 'fi-FI', rate: 0.25}, //91 iOS		
            {name: 'Fallback Finnish', lang: 'fi', fallbackvoice: true}, //92 Finnish Female fallback	

            {name: 'Fallback Afrikans', lang: 'af', fallbackvoice: true}, //93 Afrikans Male fallback	
 
            {name: 'Fallback Albanian', lang: 'sq', fallbackvoice: true}, //94 Albanian Male fallback	

            {name: 'Maged Compact'}, //95 Arabic Male Mac 
            {name: 'Tarik'}, //96 Arabic Male safari 8 mac 
            {name: 'ar-SA', rate: 0.25}, //97 iOS	
            {name: 'Fallback Arabic', lang: 'ar', fallbackvoice: true}, //98 Arabic Male fallback	

            {name: 'Fallback Armenian', lang: 'hy', fallbackvoice: true}, //99 Armenian Male fallback	

            {name: 'Zuzana Compact'}, //100 Czech Female Mac 
            {name: 'Zuzana'}, //101 Czech Female safari 8 mac 
            {name: 'cs-CZ', rate: 0.25}, //102 iOS	
            {name: 'Fallback Czech', lang: 'cs', fallbackvoice: true}, //103 Czech Female fallback	

            {name: 'Ida Compact'}, //104 Danish Female Mac 
            {name: 'Sara'}, //105 Danish Female safari 8 mac 
            {name: 'da-DK', rate: 0.25}, //106 iOS	
            {name: 'Fallback Danish', lang: 'da', fallbackvoice: true}, //107 Danish Female fallback	

            {name: 'Fallback Esperanto', lang: 'eo', fallbackvoice: true}, //108 Esperanto Male fallback	
 
            {name: 'Fallback Hatian Creole', lang: 'ht', fallbackvoice: true}, //109 Hatian Creole Female fallback	

            {name: 'Fallback Icelandic', lang: 'is', fallbackvoice: true}, //110 Icelandic Male fallback	

            {name: 'Damayanti'}, //111 Indonesian Female safari 8 mac 
            {name: 'id-ID', rate: 0.25}, //112 iOS		
            {name: 'Fallback Indonesian', lang: 'id', fallbackvoice: true}, //113 Indonesian Female fallback	

            {name: 'Fallback Latin', lang: 'la', fallbackvoice: true}, //114 Latin Female fallback	
            {name: 'Fallback Latvian', lang: 'lv', fallbackvoice: true}, //115 Latvian Male fallback	
            {name: 'Fallback Macedonian', lang: 'mk', fallbackvoice: true}, //116 Macedonian Male fallback	
            {name: 'Fallback Moldavian', lang: 'mo', fallbackvoice: true}, //117 Moldavian Male fallback	
            {name: 'Fallback Montenegrin', lang: 'sr-ME', fallbackvoice: true}, //118 Montenegrin Male fallback	

            {name: 'Agata Compact'}, //119 Polish Female Mac 
            {name: 'Zosia'}, //120 Polish Female safari 8 mac 
            {name: 'pl-PL', rate: 0.25}, //121 iOS		
            {name: 'Fallback Polish', lang: 'pl', fallbackvoice: true}, //122 Polish Female fallback	

            {name: 'Raquel Compact'}, //123 Brazilian Portugese Female Male Mac 
            {name: 'Luciana'}, //124 Brazilian Portugese Female safari 8 mac 
            {name: 'pt-BR', rate: 0.25}, //125 iOS		
            {name: 'Fallback Brazilian Portugese', lang: 'pt-BR', fallbackvoice: true}, //126 Brazilian Portugese Female fallback	

            {name: 'Joana Compact'}, //127 Portuguese Female Mac 
            {name: 'Joana'}, //128 Portuguese Female safari 8 mac 
            {name: 'pt-PT', rate: 0.25}, //129 iOS		
            {name: 'Fallback Portuguese', lang: 'pt-PT', fallbackvoice: true}, //130 Portuguese Female fallback	

            {name: 'Fallback Serbo-Croation', lang: 'sh', fallbackvoice: true}, //131 Serbo-Croation Male fallback	

            {name: 'Laura Compact'}, //132 Slovak Female Mac 
            {name: 'Laura'}, //133 Slovak Female safari 8 mac 
            {name: 'sk-SK', rate: 0.25}, //134 iOS		
            {name: 'Fallback Slovak', lang: 'sk', fallbackvoice: true}, //135 Slovak Female fallback	

            //Gender Disparity
            {name: 'Javier Compact'}, //136 Spanish (Latin American) Male Mac 
            {name: 'Paulina'}, //137 Spanish Mexican Female safari 8 mac 
            {name: 'es-MX', rate: 0.25}, //138 iOS		
            {name: 'Fallback Spanish (Latin American)', lang: 'es-419', fallbackvoice: true}, //139 Spanish (Latin American) Female fallback	

            {name: 'Fallback Swahili', lang: 'sw', fallbackvoice: true}, //140 Swahili Male fallback	

            {name: 'Fallback Tamil', lang: 'ta', fallbackvoice: true}, //141 Tamil Male fallback	

            {name: 'Narisa Compact'}, //142 Thai Female Mac 
            {name: 'Kanya'}, //143 Thai Female safari 8 mac 
            {name: 'th-TH', rate: 0.25}, //144 iOS		
            {name: 'Fallback Thai', lang: 'th', fallbackvoice: true}, //145 Thai Female fallback	

            {name: 'Fallback Vietnamese', lang: 'vi', fallbackvoice: true}, //146 Vietnamese Male fallback	

            {name: 'Fallback Welsh', lang: 'cy', fallbackvoice: true}, //147 Welsh Male fallback	

            // Gender Disparity
            {name: 'Oskar Compact'}, //148 Swedish Male Mac 
            {name: 'sv-SE', rate: 0.25}, //149 iOS	

            // Gender Disparity
            {name: 'Simona Compact'}, //150 Romanian mac female
            {name: 'Ioana'}, //151 Romanian Female safari 8 mac
            {name: 'ro-RO', rate: 0.25}, //152 iOS female

            {name: 'Kyoko'}, //153 Japanese Female safari 8 mac 

            {name: 'Lekha'}, //154 Hindi Female safari 8 mac 

            {name: 'Ting-Ting'}, //155 Chinese Female safari 8 mac 

            {name: 'Yuna'}, //156 Korean Female safari 8 mac 

            // Gender Disparity
            {name: 'Xander Compact'}, //157 Dutch male or female nl safari 8 mac
            {name: 'nl-NL', rate: 0.25} //158 iOS		


        ];
        
        self.iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
        self.is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
        self.is_safari = navigator.userAgent.indexOf("Safari") > -1;
        if ((self.is_chrome)&&(self.is_safari)) {self.is_safari=false;}
        self.iOS_initialized = false;
        
        
        //Fallback cache voices
        self.cache_ios_voices = [{"name":"he-IL","voiceURI":"he-IL","lang":"he-IL"},{"name":"th-TH","voiceURI":"th-TH","lang":"th-TH"},{"name":"pt-BR","voiceURI":"pt-BR","lang":"pt-BR"},{"name":"sk-SK","voiceURI":"sk-SK","lang":"sk-SK"},{"name":"fr-CA","voiceURI":"fr-CA","lang":"fr-CA"},{"name":"ro-RO","voiceURI":"ro-RO","lang":"ro-RO"},{"name":"no-NO","voiceURI":"no-NO","lang":"no-NO"},{"name":"fi-FI","voiceURI":"fi-FI","lang":"fi-FI"},{"name":"pl-PL","voiceURI":"pl-PL","lang":"pl-PL"},{"name":"de-DE","voiceURI":"de-DE","lang":"de-DE"},{"name":"nl-NL","voiceURI":"nl-NL","lang":"nl-NL"},{"name":"id-ID","voiceURI":"id-ID","lang":"id-ID"},{"name":"tr-TR","voiceURI":"tr-TR","lang":"tr-TR"},{"name":"it-IT","voiceURI":"it-IT","lang":"it-IT"},{"name":"pt-PT","voiceURI":"pt-PT","lang":"pt-PT"},{"name":"fr-FR","voiceURI":"fr-FR","lang":"fr-FR"},{"name":"ru-RU","voiceURI":"ru-RU","lang":"ru-RU"},{"name":"es-MX","voiceURI":"es-MX","lang":"es-MX"},{"name":"zh-HK","voiceURI":"zh-HK","lang":"zh-HK"},{"name":"sv-SE","voiceURI":"sv-SE","lang":"sv-SE"},{"name":"hu-HU","voiceURI":"hu-HU","lang":"hu-HU"},{"name":"zh-TW","voiceURI":"zh-TW","lang":"zh-TW"},{"name":"es-ES","voiceURI":"es-ES","lang":"es-ES"},{"name":"zh-CN","voiceURI":"zh-CN","lang":"zh-CN"},{"name":"nl-BE","voiceURI":"nl-BE","lang":"nl-BE"},{"name":"en-GB","voiceURI":"en-GB","lang":"en-GB"},{"name":"ar-SA","voiceURI":"ar-SA","lang":"ar-SA"},{"name":"ko-KR","voiceURI":"ko-KR","lang":"ko-KR"},{"name":"cs-CZ","voiceURI":"cs-CZ","lang":"cs-CZ"},{"name":"en-ZA","voiceURI":"en-ZA","lang":"en-ZA"},{"name":"en-AU","voiceURI":"en-AU","lang":"en-AU"},{"name":"da-DK","voiceURI":"da-DK","lang":"da-DK"},{"name":"en-US","voiceURI":"en-US","lang":"en-US"},{"name":"en-IE","voiceURI":"en-IE","lang":"en-IE"},{"name":"hi-IN","voiceURI":"hi-IN","lang":"hi-IN"},{"name":"el-GR","voiceURI":"el-GR","lang":"el-GR"},{"name":"ja-JP","voiceURI":"ja-JP","lang":"ja-JP"}];

        
        

        self.systemvoices;

        self.CHARACTER_LIMIT = 100;
        self.VOICESUPPORT_ATTEMPTLIMIT = 5;
        self.voicesupport_attempts = 0;
        self.fallbackMode = false;
        self.WORDS_PER_MINUTE = 140;

        
        self.fallback_parts = null;
        self.fallback_part_index = 0;
        self.fallback_audio = null;
        self.fallback_playbackrate = 1.25;
        self.fallback_audiopool = [];
        self.msgparameters = null;
        self.timeoutId = null;
        self.OnLoad_callbacks = [];

        //Wait until system voices are ready and trigger the event OnVoiceReady
        if (typeof speechSynthesis != 'undefined') {
            speechSynthesis.onvoiceschanged = function () {

                self.systemvoices = window.speechSynthesis.getVoices();
                //console.log("OnVoiceReady - from onvoiceschanged");
               // console.log(self.OnVoiceReady);
                if (self.OnVoiceReady != null) {
                    self.OnVoiceReady.call();
                }
            };
        }

        self.default_rv = self.responsivevoices[0];



        self.OnVoiceReady = null;


        self.init = function() {
            
            //Disable RV on IOS temporally
            /*if (self.iOS) {
                self.enableFallbackMode();
                return;
            }*/


            if (typeof speechSynthesis === 'undefined') {

                console.log('RV: Voice synthesis not supported');
                self.enableFallbackMode();
                
                

            } else {


                //Waiting a few ms before calling getVoices() fixes some issues with safari on IOS as well as Chrome
                setTimeout(function () {
                    var gsvinterval = setInterval(function () {

                        var v = window.speechSynthesis.getVoices();

                        if (v.length == 0 && (self.systemvoices == null || self.systemvoices.length == 0)) {
                            console.log('Voice support NOT ready');

                            self.voicesupport_attempts++;
                            if (self.voicesupport_attempts > self.VOICESUPPORT_ATTEMPTLIMIT) {
                                
                                clearInterval(gsvinterval);
                                
                                //On IOS, sometimes getVoices is just empty, but speech works. So we use a cached voice collection.
                                if (window.speechSynthesis != null) {
                                    
                                    if (self.iOS) {
                                        
                                        console.log('RV: Voice support ready (cached)');
                                        self.systemVoicesReady(self.cache_ios_voices);
                                        
                                    }else{
                                        
                                        console.log("RV: speechSynthesis present but no system voices found");
                                        self.enableFallbackMode();
                                    }
                                    
                                } else {
                                
                                    //We don't support voices. Using fallback
                                    self.enableFallbackMode();
                                }
                            }

                        } else {

                            console.log('RV: Voice support ready');
                            self.systemVoicesReady(v);
                            
                            clearInterval(gsvinterval);

                        }

                    }, 100);
                }, 100);
            }
            
            self.Dispatch("OnLoad");
        }

        self.systemVoicesReady = function(v) {
            self.systemvoices = v;

            self.mapRVs();

            if (self.OnVoiceReady != null)
                self.OnVoiceReady.call();            
        }

        self.enableFallbackMode = function() {

            self.fallbackMode = true;
            console.log('RV: Enabling fallback mode');

            self.mapRVs();

            if (self.OnVoiceReady != null)
                self.OnVoiceReady.call();


        }


        self.getVoices = function () {

            //Create voices array

            var v = [];

            for (var i = 0; i < self.responsivevoices.length; i++) {
                v.push({name: self.responsivevoices[i].name});
            }

            return v;

        }


        self.speak = function (text, voicename, parameters) {

            //Cancel previous speech if it's already playing
            if (self.isPlaying()){
                self.cancel();                
            }
            //Prevent fallbackmode to play more than 1 speech at the same time
            if (self.fallbackMode && self.fallback_audiopool.length>0) {
                self.clearFallbackPool();
            }
            
            //Clean text
            // Quotes " and ` -> '
            text = text.replace(/[\"\`]/gm,"'");
            
            self.msgparameters = parameters ||  {};
            self.msgtext = text;
            self.msgvoicename = voicename;

            //Support for multipart text (there is a limit on characters)
            var multipartText = [];

            if (text.length > self.CHARACTER_LIMIT) {

                var tmptxt = text;

                while (tmptxt.length > self.CHARACTER_LIMIT) {

                    //Split by common phrase delimiters
                    var p = tmptxt.search(/[:!?.;]+/);
                    var part = '';

                    //Coludn't split by priority characters, try commas
                    if (p == -1 || p >= self.CHARACTER_LIMIT) {
                        p = tmptxt.search(/[,]+/);
                    }

                    //Couldn't split by normal characters, then we use spaces
                    if (p == -1 || p >= self.CHARACTER_LIMIT) {

                        var words = tmptxt.split(' ');

                        for (var i = 0; i < words.length; i++) {

                            if (part.length + words[i].length + 1 > self.CHARACTER_LIMIT)
                                break;

                            part += (i != 0 ? ' ' : '') + words[i];

                        }

                    } else {

                        part = tmptxt.substr(0, p + 1);

                    }

                    tmptxt = tmptxt.substr(part.length, tmptxt.length - part.length);

                    multipartText.push(part);
                    //console.log(part.length + " - " + part);

                }

                //Add the remaining text
                if (tmptxt.length > 0) {
                    multipartText.push(tmptxt);
                }

            } else {

                //Small text
                multipartText.push(text);
            }


            //Find system voice that matches voice name
            var rv;

            if (voicename == null) {
                rv = self.default_rv;
            } else {
                rv = self.getResponsiveVoice(voicename);
            }

            var profile = {};




            //Map was done so no need to look for the mapped voice
            if (rv.mappedProfile != null) {

                profile = rv.mappedProfile;

            } else {

                profile.systemvoice = self.getMatchedVoice(rv);
                profile.collectionvoice = {};

                if (profile.systemvoice == null) {
                    console.log('RV: ERROR: No voice found for: ' + voicename);
                    return;
                }
            }


            if (profile.collectionvoice.fallbackvoice == true) {
                self.fallbackMode = true;
                self.fallback_parts = [];
            } else {
                self.fallbackMode = false;
            }
            
            self.msgprofile = profile;
            //console.log("Start multipart play");

            //Play multipart text
            for (var i = 0; i < multipartText.length; i++) {

                if (!self.fallbackMode) {
                    //Use SpeechSynthesis

                    //Create msg object
                    var msg = new SpeechSynthesisUtterance();
                    msg.voice = profile.systemvoice;
                    msg.voiceURI = profile.systemvoice.voiceURI;
                    msg.volume = profile.collectionvoice.volume || profile.systemvoice.volume || 1; // 0 to 1
                    msg.rate = profile.collectionvoice.rate || profile.systemvoice.rate || 1; // 0.1 to 10
                    msg.pitch = profile.collectionvoice.pitch || profile.systemvoice.pitch || 1; //0 to 2*/
                    msg.text = multipartText[i];
                    msg.lang = profile.collectionvoice.lang || profile.systemvoice.lang;
                    msg.rvIndex = i;
                    msg.rvTotal = multipartText.length;
                    
                    if (i == 0) {
                        msg.onstart = self.speech_onstart;
                    }        
                    self.msgparameters.onendcalled = false;
                    
                    if (parameters != null) {

                        

                        if (i < multipartText.length - 1 && multipartText.length > 1) {
                            msg.onend = parameters.onchunkend;
                            msg.addEventListener('end',parameters.onchuckend);
                        } else {
                            msg.onend = self.speech_onend;
                            msg.addEventListener('end',self.speech_onend);
                        }



                        msg.onerror = parameters.onerror || function (e) {
                            console.log('RV: Unknow Error');
                            console.log(e);
                        };
                        
                        msg.onpause = parameters.onpause;
                        msg.onresume = parameters.onresume;
                        msg.onmark = parameters.onmark;
                        msg.onboundary = parameters.onboundary;
                    } else {
                        msg.onend = self.speech_onend;
                        msg.onerror = function (e) {
                            console.log('RV: Unknow Error');
                            console.log(e);
                        };
                    }
                    //console.log(JSON.stringify(msg));				
                    speechSynthesis.speak(msg);

                } else {

                    var url = 'http://translate.google.com/translate_tts?ie=UTF-8&q=' + multipartText[i] + '&tl=' + profile.collectionvoice.lang || profile.systemvoice.lang || 'en-US';
                   // var url = 'http://responsivevoice.org/responsivevoice/getvoice.php?t=' + multipartText[i]+ '&tl=' + profile.collectionvoice.lang || profile.systemvoice.lang || 'en-US';
                    var audio = document.createElement("AUDIO");
                    audio.src = url;
                    audio.playbackRate = self.fallback_playbackrate;
                    audio.preload = 'auto';
                    audio.volume = profile.collectionvoice.volume || profile.systemvoice.volume || 1; // 0 to 1;
                    self.fallback_parts.push(audio);
                            console.log(audio);


                }


            }

            if (self.fallbackMode) {


                self.fallback_part_index = 0;
                self.fallback_startPart();

            }

        }

        self.startTimeout = function (text, callback) {
            
           //if (self.iOS) {
            //   multiplier = 0.5;
           //}

           var multiplier = self.msgprofile.collectionvoice.timerSpeed;
           if (self.msgprofile.collectionvoice.timerSpeed==null)
               multiplier = 1;
            
           //console.log(self.msgprofile.collectionvoice.name);
           if (multiplier <=0)
               return;
           
            self.timeoutId = setTimeout(callback, multiplier * 1000 * (60 / self.WORDS_PER_MINUTE) * text.split(/\s+/).length); //avg 140 words per minute read time            
            //console.log("Timeout " + self.timeoutId + " started: " + (multiplier * 1000 * (60 / self.WORDS_PER_MINUTE) * text.split(/\s+/).length).toString());            
        }

        self.checkAndCancelTimeout = function () {
            if (self.timeoutId != null) {
                //console.log("Timeout " + self.timeoutId + " cancelled");
                clearTimeout(self.timeoutId);
                self.timeoutId = null;
            }
        }

        self.speech_timedout = function() {
            //console.log("Speech cancelled: Timeout " + self.timeoutId + " ended");
            self.cancel();
            self.cancelled = false;
            //if (!self.iOS) //On iOS, cancel calls msg.onend 
                self.speech_onend();
            
        }

        self.speech_onend = function () {
            self.checkAndCancelTimeout();
            
            //Avoid this being automatically called just after calling speechSynthesis.cancel
            if (self.cancelled === true) {
                self.cancelled = false;
                return;
            }
            
            //console.log("on end fired");
            if (self.msgparameters != null && self.msgparameters.onend != null && self.msgparameters.onendcalled!=true) {
                //console.log("Speech on end called  -" + self.msgtext);
                self.msgparameters.onendcalled=true;
                self.msgparameters.onend();
                
            } 

        }

        self.speech_onstart = function () {
            //if (!self.iOS)
            //console.log("Speech start");
            if (self.iOS || self.is_safari)
                self.startTimeout(self.msgtext,self.speech_timedout);
            
            self.msgparameters.onendcalled=false;
            if (self.msgparameters != null && self.msgparameters.onstart != null) {
                self.msgparameters.onstart();
            }

        }



        self.fallback_startPart = function () {

            if (self.fallback_part_index == 0) {
                self.speech_onstart();
            }
            
            self.fallback_audio = self.fallback_parts[self.fallback_part_index];
            
            if (self.fallback_audio == null) {

                //Fallback audio is not working. Just wait for the timeout event
                console.log("RV: Fallback Audio is not available");

            } else {

                
                var audio = self.fallback_audio;
                
                //Add to pool to prevent multiple streams to be played at the same time
                self.fallback_audiopool.push(audio);
                
                setTimeout(function(){audio.playbackRate = self.fallback_playbackrate;},50)
                audio.onloadedmetadata = function() {
                    audio.play();
                    audio.playbackRate = self.fallback_playbackrate;
                }                
                self.fallback_audio.play();
                self.fallback_audio.addEventListener('ended', self.fallback_finishPart);
            }
        }

        self.fallback_finishPart = function (e) {
                
            self.checkAndCancelTimeout();

            if (self.fallback_part_index < self.fallback_parts.length - 1) {
                //console.log('chunk ended');
                self.fallback_part_index++;
                self.fallback_startPart();

            } else {
                //console.log('msg ended');
                self.speech_onend();

            }

        }


        self.cancel = function () {

            self.checkAndCancelTimeout();

            if (self.fallbackMode){
                if (self.fallback_audio!=null)
                    self.fallback_audio.pause();
                self.clearFallbackPool();
            }else{
                self.cancelled = true;
                speechSynthesis.cancel();

            }
        }


        self.voiceSupport = function () {

            return ('speechSynthesis' in window);

        }

        self.OnFinishedPlaying = function (event) {
            //console.log("OnFinishedPlaying");
            if (self.msgparameters != null) {
                if (self.msgparameters.onend != null)
                    self.msgparameters.onend();
            }

        }

        //Set default voice to use when no voice name is supplied to speak()
        self.setDefaultVoice = function (voicename) {

            var rv = self.getResponsiveVoice(voicename);

            if (rv != null) {
                self.default_rv = rv;
            }

        }

        //Map responsivevoices to system voices
        self.mapRVs = function() {

            for (var i = 0; i < self.responsivevoices.length; i++) {

                var rv = self.responsivevoices[i];

                for (var j = 0; j < rv.voiceIDs.length; j++) {

                    var vcoll = self.voicecollection[rv.voiceIDs[j]];

                    if (vcoll.fallbackvoice != true) {		// vcoll.fallbackvoice would be null instead of false

                        // Look on system voices
                        var v = self.getSystemVoice(vcoll.name);
                        if (v != null) {
                            rv.mappedProfile = {
                                systemvoice: v,
                                collectionvoice: vcoll
                            };
                            //console.log("Mapped " + rv.name + " to " + v.name);
                            break;
                        }

                    } else {

                        //Pick the fallback voice
                        rv.mappedProfile = {
                            systemvoice: {},
                            collectionvoice: vcoll
                        };
                        //console.log("Mapped " + rv.name + " to " + vcoll.lang + " fallback voice");
                        break;

                    }
                }
            }


        }


        //Look for the voice in the system that matches the one in our collection
        self.getMatchedVoice = function(rv) {

            for (var i = 0; i < rv.voiceIDs.length; i++) {
                var v = self.getSystemVoice(self.voicecollection[rv.voiceIDs[i]].name);
                if (v != null)
                    return v;
            }

            return null;

        }

        self.getSystemVoice = function(name) {

            if (typeof self.systemvoices === 'undefined' || self.systemvoices === null)
                return null;

            for (var i = 0; i < self.systemvoices.length; i++) {
                if (self.systemvoices[i].name == name)
                    return self.systemvoices[i];
            }

            return null;

        }

        self.getResponsiveVoice = function(name) {

            for (var i = 0; i < self.responsivevoices.length; i++) {
                if (self.responsivevoices[i].name == name) {
                    return self.responsivevoices[i];
                }
            }

            return null;

        }
        
        self.Dispatch = function(name) {
            
            if (self.hasOwnProperty(name + "_callbacks") && 
                self[name + "_callbacks"].length > 0) {
                var callbacks = self[name + "_callbacks"];
                for(var i=0; i<callbacks.length; i++) {
                    callbacks[i]();
                }
                
            }
        }
        
        self.AddEventListener = function(name,callback) {
            if (self.hasOwnProperty(name + "_callbacks")) {
                self[name + "_callbacks"].push(callback);
            }else{
                console.log("RV: Event listener not found: " + name);
            }
        }
        
        
        //Event to initialize speak on iOS
        self.clickEvent = function() {
            if (self.iOS && !self.iOS_initialized) {
                self.speak(" ");
                self.iOS_initialized = true;
            }
        }
        
        
        self.isPlaying = function() {
            if (self.fallbackMode) {
                
                return  (self.fallback_audio!=null &&
                        !self.fallback_audio.ended &&
                        !self.fallback_audio.paused);
                
            }else{
                
                return speechSynthesis.speaking;
                
            }
        }
        
        self.clearFallbackPool = function() {
            
            for (var i=0; i<self.fallback_audiopool.length; i++) {
                
                if (self.fallback_audiopool[i]!=null) {
                    self.fallback_audiopool[i].pause();
                    self.fallback_audiopool[i].src='';
                    //self.fallback_audiopool[i].parentElement.removeChild(self.fallback_audiopool[i]);
                }
            }
            self.fallback_audiopool = [];
        }
        
        
        document.addEventListener('DOMContentLoaded', function () {
            self.init();
        });
        

    }
    var responsiveVoice = new ResponsiveVoice();
}
