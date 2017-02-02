(function() {
    function AlbumCtrl() {
        this.albumData = [];
        this.albumData.push(angular.copy(albumPicasso)).songs;
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();