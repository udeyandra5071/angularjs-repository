var _Debug = true; // set this to false to turn debugging off
// and get rid of those annoying alert boxes.
// Define exception/error codes
var _NoError = 0;
var _GeneralException = 101;
var _ServerBusy = 102;
var _InvalidArgumentError = 201;
var _ElementCannotHaveChildren = 202;
var _ElementIsNotAnArray = 203;
var _NotInitialized = 301;
var _AlreadyFinalized = 302; // medsn error code
var _NotImplementedError = 401;
var _InvalidSetValue = 402;
var _ElementIsReadOnly = 403;
var _ElementIsWriteOnly = 404;
var _IncorrectDataType = 405;


// local variable definitions
var apiHandle = null;
var handleFound = false;
var API = null;
var findAPITries = 0;
var isIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;

/*******************************************************************************
 **
 ** Function: doLMSInitialize()
 ** Inputs:  None
 ** Return:  CMIBoolean true if the initialization was successful, or
 **          CMIBoolean false if the initialization failed.
 **
 ** Description:
 ** Initialize communication with LMS by calling the LMSInitialize
 ** function which will be implemented by the LMS.
 **
 *******************************************************************************/
function doLMSInitialize() {
    var api = getAPIHandle();
    try {
        var result = api.LMSInitialize("");
        return result.toString() == "true";
    } catch (err) {}
    return false;
}

/*******************************************************************************
 **
 ** Function doLMSFinish()
 ** Inputs:  None
 ** Return:  CMIBoolean true if successful
 **          CMIBoolean false if failed.
 **
 ** Description:
 ** Close communication with LMS by calling the LMSFinish
 ** function which will be implemented by the LMS
 **
 *******************************************************************************/
function doLMSFinish() {
    var api = getAPIHandle();
    var result = "false";
    if (api == null) {
        //alert("Unable to locate the LMS's API Implementation.\nLMSFinish was not successful.");
       // debug("LMSFinish was not successful.");
        //return "false";
    } else {
        // call the LMSFinish function that should be implemented by the API
        result = api.LMSFinish("");
    }

    return result.toString();
}

function SCORMFinish(scoStartTime) {
    var totalsecs = ((new Date().getTime()) - scoStartTime) / 1000;
    doLMSSetValue("cmi.core.session_time", getAICCTime(totalsecs));
    //doLMSCommit();
    doLMSFinish();
    if (top) setTimeout('top.close()', 500);
}

/*******************************************************************************
 **
 ** Function doLMSGetValue(name)
 ** Inputs:  name - string representing the cmi data model defined category or
 **             element (e.g. cmi.core.student_id)
 ** Return:  The value presently assigned by the LMS to the cmi data model
 **       element defined by the element or category identified by the name
 **       input value.
 **
 ** Description:
 ** Wraps the call to the LMS LMSGetValue method
 **
 *******************************************************************************/
function doLMSGetValue(name) {
    var api = getAPIHandle();
    if (api == null) {
        //alert("Unable to locate the LMS's API Implementation.\nLMSGetValue was not successful.");
        return "";
    } else {
        var value = api.LMSGetValue(name);
        var errCode = api.LMSGetLastError().toString();
        if (errCode != _NoError) {
            // an error was encountered so display the error description
            var errDescription = api.LMSGetErrorString(errCode);
            //debug("LMSGetValue(" + name + ") failed. \n" + errCode + ": " + errDescription);
            return "";
        } else {
            return value.toString();
        }
    }
}

/*******************************************************************************
 **
 ** Function doLMSSetValue(name, value)
 ** Inputs:  name -string representing the data model defined category or element
 **          value -the value that the named element or category will be assigned
 ** Return:  CMIBoolean true if successful
 **          CMIBoolean false if failed.
 **
 ** Description:
 ** Wraps the call to the LMS LMSSetValue function
 **
 *******************************************************************************/
function doLMSSetValue(name, value) {
    var api = getAPIHandle();
    if (api == null) {
        //alert("Unable to locate the LMS's API Implementation.\nLMSSetValue was not successful.");
        //debug("LMSSetValue "+name+":"+value);
        return;
    } else {
        var result = api.LMSSetValue(name, value);
        if (typeof(result) == "undefined" || result.toString() != "true") {
            var err = ErrorHandler();
        }
    }

    return;
}

/*******************************************************************************
 **
 ** Function doLMSCommit()
 ** Inputs:  None
 ** Return:  None
 **
 ** Description:
 ** Call the LMSCommit function 
 **
 *******************************************************************************/
function doLMSCommit() {
    var api = getAPIHandle();
    if (api == null) {
       // debug("Unable to locate the LMS's API Implementation.\nLMSCommit was not successful.");
        return "false";
    } else {
        var result = api.LMSCommit("");
        if (result != "true") {
            var err = ErrorHandler();
        }
    }

    return result.toString();
}

/*******************************************************************************
 **
 ** Function doLMSGetLastError()
 ** Inputs:  None
 ** Return:  The error code that was set by the last LMS function call
 **
 ** Description:
 ** Call the LMSGetLastError function 
 **
 *******************************************************************************/
function doLMSGetLastError() {
    var api = getAPIHandle();
    if (api == null) {
      //  debug("Unable to locate the LMS's API Implementation.\nLMSGetLastError was not successful.");
        //since we can't get the error code from the LMS, return a general error
        return _GeneralError;
    }

    return api.LMSGetLastError().toString();
}

/*******************************************************************************
 **
 ** Function doLMSGetErrorString(errorCode)
 ** Inputs:  errorCode - Error Code
 ** Return:  The textual description that corresponds to the input error code
 **
 ** Description:
 ** Call the LMSGetErrorString function 
 **
 ********************************************************************************/
function doLMSGetErrorString(errorCode) {
    var api = getAPIHandle();
    if (api == null) {
        debug("Unable to locate the LMS's API Implementation.\nLMSGetErrorString was not successful.");
    }

    return api.LMSGetErrorString(errorCode).toString();
}

/*******************************************************************************
 **
 ** Function doLMSGetDiagnostic(errorCode)
 ** Inputs:  errorCode - Error Code(integer format), or null
 ** Return:  The vendor specific textual description that corresponds to the 
 **          input error code
 **
 ** Description:
 ** Call the LMSGetDiagnostic function
 **
 *******************************************************************************/
function doLMSGetDiagnostic(errorCode) {
    var api = getAPIHandle();
    if (api == null) {
        debug("Unable to locate the LMS's API Implementation.\nLMSGetDiagnostic was not successful.");
    }

    return api.LMSGetDiagnostic(errorCode).toString();
}

/*******************************************************************************
 **
 ** Function LMSIsInitialized()
 ** Inputs:  none
 ** Return:  true if the LMS API is currently initialized, otherwise false
 **
 ** Description:
 ** Determines if the LMS API is currently initialized or not.
 **
 *******************************************************************************/
function LMSIsInitialized() {
    // there is no direct method for determining if the LMS API is initialized
    // for example an LMSIsInitialized function defined on the API so we'll try
    // a simple LMSGetValue and trap for the LMS Not Initialized Error

    var api = getAPIHandle();
    if (api == null) {
        //alert("Unable to locate the LMS's API Implementation.\nLMSIsInitialized() failed.");
        return false;
    } else {
        var value = api.LMSGetValue("cmi.core.lesson_status");
        var errCode = api.LMSGetLastError().toString();
        if (errCode == _NotInitialized) {
            return false;
        } else {
            return true;
        }
    }
}

/*******************************************************************************
 **
 ** Function ErrorHandler()
 ** Inputs:  None
 ** Return:  The current value of the LMS Error Code
 **
 ** Description:
 ** Determines if an error was encountered by the previous API call
 ** and if so, displays a message to the user.  If the error code
 ** has associated text it is also displayed.
 **
 *******************************************************************************/
function ErrorHandler() {
    var api = getAPIHandle();
    if (api == null) {
      //  debug("Unable to locate the LMS's API Implementation.\nCannot determine LMS error code.");
        return;
    }

    // check for errors caused by or from the LMS
    var errCode = api.LMSGetLastError().toString();
    //alert('errCode: ' + errCode);
    if (errCode != _NoError) {
        // an error was encountered so display the error description
        var errDescription = api.LMSGetErrorString(errCode);

        if (_Debug == true) {
            errDescription += "\n";
            errDescription += api.LMSGetDiagnostic(null);
            // by passing null to LMSGetDiagnostic, we get any available diagnostics
            // on the previous error.
        }

        //alert('Error: '+errDescription);
    }

    return errCode;
}

/******************************************************************************
 **
 ** Function getAPIHandle()
 ** Inputs:  None
 ** Return:  value contained by APIHandle
 **
 ** Description:
 ** Returns the handle to API object if it was previously set,
 ** otherwise it returns null
 **
 *******************************************************************************/
function getAPIHandle() {
    //if (handleFound && typeof(apihandle) == "undefined") return null;
    if (apiHandle == null) apiHandle = getAPI();
    return apiHandle;
}


/*******************************************************************************
 **
 ** Function findAPI(win)
 ** Inputs:  win - a Window Object
 ** Return:  If an API object is found, it's returned, otherwise null is returned
 **
 ** Description:
 ** This function looks for an object named API in parent and opener windows
 **
 *******************************************************************************/
function findAPI(win) {
    while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
        findAPITries++;
        // Note: 7 is an arbitrary number, but should be more than sufficient
        if (findAPITries > 7) {
            debug("Error finding API -- too deeply nested.");
            findAPITries = 0;
            return null;
        }
        win = win.parent;

    }
    return win.API;
}



/*******************************************************************************
 **
 ** Function getAPI()
 ** Inputs:  none
 ** Return:  If an API object is found, it's returned, otherwise null is returned
 **
 ** Description:
 ** This function looks for an object named API, first in the current window's 
 ** frame hierarchy and then, if necessary, in the current window's opener window
 ** hierarchy (if there is an opener window).
 **
 *******************************************************************************/
function getAPI() {
    var theAPI = findAPI(window);
    if ((theAPI == null) && (window.top.opener != null) && (typeof(window.top.opener) != "undefined")) {
        theAPI = findAPI(window.top.opener);
    }
    handleFound = true;
    return theAPI
}

function getAICCTime(totalsecs) {
    if (totalsecs == null || totalsecs == 'null' || totalsecs == '') totalsecs = 0;
    if (totalsecs > 1 * 60 * 60) totalsecs = 1 * 60 * 60; // 1 hour max seattime per session
    hours = Math.round((totalsecs / 60 / 60) - .5);
    mins = Math.round(((totalsecs - (hours * 60 * 60)) / 60) - .5);
    secs = Math.round((totalsecs - (hours * 60 * 60) - (mins * 60)));

    timeStr = "";
    if (hours < 10) timeStr += "0";
    timeStr += hours;
    timeStr += ":";
    if (mins < 10) timeStr += "0";
    timeStr += mins;
    timeStr += ":";
    if (secs < 10) timeStr += "0";
    timeStr += secs;

    return timeStr;
}

function formatTimecode(timecode) {
    var bookmark = Math.round(timecode);
    mins = Math.round((timecode / 60) - .5);
    secs = Math.round(timecode - (mins * 60));
    extra = ":";
    if (secs < 10) extra = ":0";
    return mins + extra + secs;
}

var _cmiData = {};
_cmiData.suspendData = null;
_cmiData.lessonLocation = null;
_cmiData.initialLessonLocation = null;

function initBookmarkData(numChapters, callback) {
    callback = callback || function () {};
    _cmiData.suspendData = doLMSGetValue("cmi.suspend_data");
    if (!_cmiData.suspendData || _cmiData.suspendData.length == 0) {
        _cmiData.suspendData = "";
        for (var i = 0; i < numChapters; i++) {
            if (i > 0) _cmiData.suspendData += ",";
            _cmiData.suspendData += "0";
        }
        doLMSSetValue("cmi.suspend_data", _cmiData.suspendData);
    }

    _cmiData.lessonLocation = doLMSGetValue("cmi.core.lesson_location");
    if (!_cmiData.lessonLocation || _cmiData.lessonLocation.length == 0) {
        _cmiData.lessonLocation = "1"; // default lesson location
    }
    _cmiData.initialLessonLocation = _cmiData.lessonLocation;
    setTimeout(callback, 200);
}

function chapterViewed(chapterNum) {
    // get current suspend data. let's try storing this locally instead of asking the LMS each time
    //var suspendData = doLMSGetValue("cmi.suspend_data");
    if (!_cmiData.suspendData || _cmiData.suspendData.length == 0) {
     //   debug("Suspend data has not been properly initialized");
        return;
    }
    var chapterStatus = _cmiData.suspendData.split(",");
    if (chapterStatus.length < chapterNum) {
     //   debug("Suspend data has not been initialized for chapter " + chapterNum);
        return;
    }

    // set current chapter as viewed
    chapterStatus[chapterNum - 1] = "1";
    _cmiData.suspendData = chapterStatus.join();
    doLMSSetValue("cmi.suspend_data", _cmiData.suspendData);

    _cmiData.lessonLocation = chapterNum + "";
    doLMSSetValue("cmi.core.lesson_location", _cmiData.lessonLocation);

    var allComplete = true;
    for (var i = 0; i < chapterStatus.length; i++) {
        if (chapterStatus[i] == "0") {
            allComplete = false;
            break;
        }
    }

    // change lesson status to completed if all chapters viewed
    // completion set by post-test now
    if (allComplete) {
        doLMSSetValue("cmi.core.lesson_status", "completed");
        doLMSSetValue('cmi.core.exit', '');
    }
}


//if (!debug) {

//}
