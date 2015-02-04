'use strict';

angular.module('sofa.urlParserService', [])

.factory('urlParserService', function () {
    return new sofa.UrlParserService(new sofa.LocationService());
});
