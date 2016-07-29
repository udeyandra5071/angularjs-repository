<%@page import = "com.medschool.html.*, com.medschool.elp.*, com.medschool.util.*, com.medschool.common.*, com.medschool.jdbc.*, com.medschool.reports.*, java.util.*, java.text.*, java.io.*, org.joda.time.*, org.joda.time.format.*,com.google.gson.*,com.sun.syndication.feed.synd.SyndFeed,com.sun.syndication.io.*,com.sun.syndication.feed.synd.*,org.json.simple.JSONValue" %>

<%
    response.setHeader("Cache-Control", "no-cache"); //HTTP 1.1
    response.setHeader("Pragma", "no-cache"); //HTTP 1.0 
    response.setDateHeader("Expires", 0); //prevents caching at the proxy
    final String CLIENT_NAME="CCC";
    Client client = ClientManager.getInstance().getClient(CLIENT_NAME);
    if (client == null) {
        response.sendError(response.SC_INTERNAL_SERVER_ERROR, "Client not found");
        return;
    }
    ProfileContext pctx = (ProfileContext) session.getAttribute(CommonConstants.PROFILE_CONTEXT);
    if (pctx == null) {
        response.sendRedirect("index.jsp");
        return;
    }
    Profile profile = ProfileManager.getInstance(client.getClientID()).getProfile(pctx.getLoginID());
%>