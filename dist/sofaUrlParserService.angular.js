/**
 * sofa-url-parser-service - v0.3.0 - Wed Feb 04 2015 11:34:26 GMT+0100 (CET)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {
'use strict';

angular.module('sdk.services.urlParserService', []);

angular.module('sdk.services.urlParserService')
.factory('urlParserService', function(){
        return new cc.UrlParserService(new sofa.LocationService());
});
}(angular));
