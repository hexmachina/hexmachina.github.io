"use strict";
/// <reference path="../node_modules/tumblr.js/lib/tumblr.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
var MyTumblr;
(function (MyTumblr) {
    var TumblrRequest = /** @class */ (function () {
        function TumblrRequest() {
            this.tumblr = require("tumblr.js");
            this.client = this.tumblr.createClient({ consumer_key: 'mfUfv91je5AIkzd8wQ1TpVga63Zf4dhJ6c8BkjAEIthvTBk6rA' });
            console.log("instantiate tumblr");
        }
        //client.blogPosts('wilhelmscribble.tumblr.com', GetPosts);
        TumblrRequest.prototype.GetPost = function (tag, limit, callback) {
            if (this.client) {
                this.client.blogPosts('wilhelmscribble.tumblr.com', { tag: tag, limit: limit }, this.GetResponse);
            }
        };
        TumblrRequest.prototype.GetResponse = function (err, res) {
            console.log(res);
        };
        return TumblrRequest;
    }());
    MyTumblr.TumblrRequest = TumblrRequest;
})(MyTumblr = exports.MyTumblr || (exports.MyTumblr = {}));
//client.blogPosts('wilhelmscribble.tumblr.com', { tag: 'storyboard', limit: 6 }, function (err, data) {
// ...
//});
//# sourceMappingURL=C:/Users/hex_m/OneDrive/Develop/ProfessionalWebsite/MainWebSite/js/parserTumblr.js.map