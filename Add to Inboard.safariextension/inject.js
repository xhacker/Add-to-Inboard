if (window.top === window){

    var html = '<div class="meta-act">\
                <div class="inboard">\
                    <a class="meta-act-link meta-inboard" href="javascript:void(0)">Add to Inboard</a>\
                </div>\
            </div>'

    document.querySelector('.bucket').parentNode.insertAdjacentHTML('afterend', html)

    document.querySelector('.meta-inboard').addEventListener('click', function() {
      var src = document.querySelector('.the-shot .single-img img').getAttribute('src')
      var title = document.querySelector('#screenshot-title').textContent
      var webURL = window.location.href

      var url = 'inboard://import?url=' + encodeURIComponent(src) + '&title=' + encodeURIComponent(title) + '&web_url=' + encodeURIComponent(webURL)
      window.open(url, '_self')
    })
}
