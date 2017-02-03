(function() {
    function AlbumCtrl(Fixtures) {
        this.albumData = [];
        this.albumData.push(Fixtures.getAlbum()).songs;
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();