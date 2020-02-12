function handleThumbnailClicks(){
    $('.thumbnail').click(event => {
        const thumbSrc = $(event.currentTarget).find('img').attr('src');
        const thumbAlt = $(event.currentTarget).find('img').attr('alt');

        $('.hero img').attr('src', thumbSrc);
        $('.hero img').attr('alt', thumbAlt);
    });
}


$(handleThumbnailClicks);