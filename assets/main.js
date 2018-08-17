let netPeakApp = angular.module('app', []);

(function (app) {
    app.controller('highlight', function ($scope) {
        $scope.tabs = [
            {
                title: 'Sync across all devices',
                text: 'This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking.',
                imageUrl: 'assets/images/sync-mini-icon.png'
            },
            {
                title: 'All emails in one place',
                text: 'This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking.',
                imageUrl: 'assets/images/emails-mini-icon.png'
            },
            {
                title: 'Track your time',
                text: 'This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking.',
                imageUrl: 'assets/images/track-mini-icon.png'
            }
        ];

        function showId() {
            console.log('success')
        }
    });
    app.controller('pricing', function ($scope) {
        $scope.licensies = [
            {
                name: '1',
                value: '1'
            },
            {
                name: '2',
                value: '2'
            },
            {
                name: '3',
                value: '3'
            }
        ];
        $scope.selectedItem             = $scope.licensies[0];
        $scope.defaultSubscriptionPrice = 10;
        $scope.currentSubscriptionPrice = $scope.defaultSubscriptionPrice;
        $scope.validPromocode           = false;

        $scope.updateLicenseCount = function () {
            switch ($scope.selectedItem) {
                case '1':
                    $scope.currentSubscriptionPrice = $scope.defaultSubscriptionPrice;
                    break;
                case '2':
                    $scope.currentSubscriptionPrice = ($scope.defaultSubscriptionPrice - $scope.defaultSubscriptionPrice * 0.1) * 2;
                    break;
                case '3':
                    $scope.currentSubscriptionPrice = ($scope.defaultSubscriptionPrice - $scope.defaultSubscriptionPrice * 0.2) * 3;
                    break;
            };
            if ($scope.validPromocode) $scope.currentSubscriptionPrice *= 0.5;
        }
        $scope.checkPromocode = function () {
            if ($scope.promocode === 'Test') {
                $scope.validPromocode = true;
                $scope.updateLicenseCount();
            }
        }
    });
})(netPeakApp)