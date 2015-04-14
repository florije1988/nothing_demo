/**
 * Created by florije on 2015/3/31.
 */
//为核心的AMail服务创建模块
var aMailServices = angular.module('AMail', ['ngRoute']);

//在URL、模板和控制器之间建立映射关系
function emailRouteConfig($routeProvider) {

    $routeProvider.when('/', {controller: ListController, templateUrl: 'list.html'})
//注意，为了创建详情视图，我们在id前面加了一个冒号，从而指定了一个参数化的URL组件
        .when('/view/:id', {controller: DetailController, templateUrl: 'detail.html'})
        .otherwise({redirectTo: '/'});
}


//配置我们的路由，以便AMail服务能够找到它
aMailServices.config(emailRouteConfig);

//一些虚拟的邮件
messages = [
    {
        id: 0,
        sender: 'jean@somecompany.com',
        subject: 'Hi there,old firend',
        date: 'Dec 7,2013 12:32:00',
        recipients: ['greg@somecompany.com'],
        message: 'Hey,we should get together fo lunch sometime and catch up.There are many things we should collaborate on this year.'
    },
    {
        id: 1,
        sender: 'maria@somecompany.com',
        subject: 'Where did you leavemy laptop?',
        date: 'Dec 7,2013 8:15:12',
        recipients: ['greg@somecompany.com'],
        message: 'I thought you were going to put it in my desk drawer.But it does not seem to be there.'
    },
    {
        id: 2,
        sender: 'bill@somecompany.com',
        subject: 'Lost python',
        date: 'Dec 6,2013 20:35:02',
        recipients: ['greg@somecompany.com'],
        message: "She doesn't move too fast,so just call me if you see her."
    }
];

//把我们的邮件发布给邮件列表模板
function ListController($scope) {

    $scope.messages = messages;
}

//从路由信息（从URL中解析出来的）中获取邮件id，然后用它找到正确的邮件对象
function DetailController($scope, $routeParams) {

    $scope.message = messages[$routeParams.id];
}