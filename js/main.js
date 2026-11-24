/// <reference path="../node_modules/@types/jquery/index.d.ts"/>
var key = 'mfUfv91je5AIkzd8wQ1TpVga63Zf4dhJ6c8BkjAEIthvTBk6rA';
var id = 'wilhelmscribble';
function GetTumblrPostsByTag(tag, limit, callback) {
    $.ajax({
        type: "GET",
        url: "http://api.tumblr.com/v2/blog/" + id + ".tumblr.com/posts/photo?api_key=" + key + "&tag=" + tag + "&limit=" + limit,
        dataType: "jsonp",
    }).done(callback);
}
function TumblrTagResponse(data, target) {
    for (var i = 0; i < data.response.posts.length; i++) {
        BuildContentPost(data.response.posts[i], target);
    }
}
function BuildContentPost(post, target) {
    var li = AttachElement($(target), "li", "contentpost__item bounceIn");
    var a = AttachElement(li, "a", "contentpost__item-list");
    a.attr("href", post.post_url);
    a.attr("target", "blank");
    a.addClass("contentpost__item-link");
    var div = AttachElement(a, "div", "contentpost__item-photo");
    var img = $("<img/>");
    div.append(img);
    img.addClass("contentpost__item-image");
    img.attr("src", post.photos[0].alt_sizes[1].url);
    var h3 = AttachElement(a, "h3", "contentpost__item-title");
    var sum = post.summary;
    if (sum.length > 0) {
        sum = sum.split("#")[0];
    }
    h3.append(sum);
}
function AttachElement(target, element, classData) {
    var el = $("<" + element + "></" + element + ">");
    el.addClass(classData);
    target.append(el);
    return el;
}
window.onload = function () {
    GetTumblrPostsByTag("storyboard", 6, function (data) { return TumblrTagResponse(data, '#storyboardList'); });
    GetTumblrPostsByTag("range", 6, function (data) { return TumblrTagResponse(data, '#characterList'); });
};
//# sourceMappingURL=C:/Users/hex_m/OneDrive/Develop/ProfessionalWebsite/MainWebSite/js/main.js.map