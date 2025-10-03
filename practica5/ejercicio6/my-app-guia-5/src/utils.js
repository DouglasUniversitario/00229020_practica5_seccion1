export function getImageUrl(persom, size = 's'){
    return (
        'https://i.imgur.com/' +
        personalbar.imageId +
        size +
        '.jpg'
    );
}