/**
 * sofa-url-parser-service - v0.3.2 - Wed Mar 25 2015 15:07:05 GMT+0100 (CET)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (sofa, document, undefined) {
'use strict';
/* global sofa */
/**
 * @sofadoc class
 * @name sofa.UrlParserService
 * @distFile dist/sofa.urlParserService.js
 * @package sofa-url-parser-service
 * @requiresPackage sofa-core
 * @requires sofa.LocationService
 *
 * @description
 * This service provides a clean interface when it comes to accessing url ids
 * for categories and products.
 */
sofa.define('sofa.UrlParserService', function ($location) {
    var self = {};

    var views = {
        product: /\/cat\/.*\/product\//i,
        products: /\/cat\/.*\/products/i,
        categories: /\/cat\/[^/]+$/i
    };

    var utilityRegex = {
        urlBeforeCategory: /.*cat\//,
        urlBeforeProduct: /.*\/product\//,
        urlRightFromSlash: /(\/|\?).*/
    };

    /**
     * @sofadoc method
     * @name sofa.UrlParserService#isView
     * @memberof sofa.UrlParserService
     *
     * @description
     * Returns true if given `viewName` is a view.
     *
     * @param {string} viewName View name.
     * @return {boolean}
     */
    self.isView = function (viewName) {
        var regex = views[viewName];

        if (!regex) {
            throw new Error(viewName + 'unknown');
        }

        return regex.test($location.path());
    };

    /**
     * @sofadoc method
     * @name sofa.UrlParserService#isRootCategory
     * @memberof sofa.UrlParserService
     *
     * @description
     * Returns true if current location path is a root category.
     *
     * @return {boolean}
     */
    self.isRootCategory = function () {
        var path = $location.path();
        return path === '/' || path === '/cat/';
    };

    /**
     * @sofadoc method
     * @name sofa.UrlParserService#getCategoryUrlId
     * @memberof sofa.UrlParserService
     *
     * @description
     * Extracts a category url id from a URL for you and returns it.
     *
     * @return {string} Category url id.
     */
    self.getCategoryUrlId = function () {
        return $location.path()
                        .replace(utilityRegex.urlBeforeCategory, '')
                        .replace(utilityRegex.urlRightFromSlash, '');
    };

    /**
     * @sofadoc method
     * @name sofa.UrlParserService#getProductUrlId
     * @memberof sofa.UrlParserService
     *
     * @description
     * Extracts a Product url id from a URL for you and returns it.
     *
     * @return {string} Product url id.
     */
    self.getProductUrlId = function () {
        return $location.path()
                        .replace(utilityRegex.urlBeforeProduct, '')
                        .replace(utilityRegex.urlRightFromSlash, '');
    };

    return self;
});
}(sofa, document));
