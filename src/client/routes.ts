import {app} from './app';

import {TicketController} from './ticket/ticket.controller';

export function initRoutes() {
    app.config(($stateProvider: angular.ui.IStateProvider,
        $urlRouterProvider: angular.ui.IUrlRouterProvider) => {

        $urlRouterProvider.otherwise('/ticket');

        state('ticket', TicketController);

        function state(name: string, controller: any) {
            $stateProvider
                .state({
                    name: name,
                    url: '/' + name,
                    templateUrl: `/src/client/${name}/${name}.html`,
                    controller: controller,
                    controllerAs: 'vm'

                });
        }

    });
}