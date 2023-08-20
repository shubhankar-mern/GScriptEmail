import onOpen from "./onOpen.js";
import sendEmail from "./send.js";
import showSidebar from "./sidebar.js";
import doGet from './webapp.js';

global.onOpen = onOpen;
global.showSidebar = showSidebar;
global.sendEmail = sendEmail
global.doGet = doGet;