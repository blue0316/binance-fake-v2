<html>
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Admin Panel</title>

    <script
        src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js?v=<%= new Date().toISOString() %>"></script>
    <script>
        WebFont.load({
            google: {
                "families": ["Montserrat:300,400,500,600,700"]
            },
            active: function () {
                sessionStorage.fonts = true;
            }
        });
    </script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link href="/dash/css/perfect-scrollbar.css" rel="stylesheet" type="text/css"/>
    <link href="/dash/css/line-awesome.css" rel="stylesheet" type="text/css"/>
    <link href="/dash/css/flaticon.css" rel="stylesheet" type="text/css"/>
    <link href="/dash/css/flaticon2.css" rel="stylesheet" type="text/css"/>
    <link href="/dash/css/style.bundle.css?v={{ time() }}" rel="stylesheet" type="text/css"/>
    <link href="/css/wnoty.css" rel="stylesheet"/>
    <link href="/dash/css/datatables.bundle.min.css?v={{ time() }}" rel="stylesheet" type="text/css"/>
    <link href="/dash/css/bootstrap-datetimepicker.min.css" rel="stylesheet" type="text/css"/>

    <script src="/dash/js/jquery.min.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js?v=<%= new Date().toISOString() %>"></script>
    <script src="/js/wnoty.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script src="/dash/js/popper.min.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script src="/dash/js/bootstrap.min.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script src="/dash/js/bootstrap-datetimepicker.min.js?v=<%= new Date().toISOString() %>"
            type="text/javascript"></script>
    <script src="/dash/js/bootstrap-datetimepicker.ru.js?v=<%= new Date().toISOString() %>"
            type="text/javascript"></script>
    <script src="/dash/js/bootstrap-datetimepicker.js?v=<%= new Date().toISOString() %>"
            type="text/javascript"></script>
    <script src="/dash/js/perfect-scrollbar.min.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script src="/dash/js/scripts.bundle.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script src="/dash/js/datatables.bundle.min.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script src="/dash/js/dtables.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script type="text/javascript" src="/js/chart.min.js?v=<%= new Date().toISOString() %>"></script>
    <link rel="stylesheet" href="/css/select2.css">
    <link rel="stylesheet" href="/css/select2-bootstrap4.css">
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/js/select2.min.js?v=<%= new Date().toISOString() %>"></script>
</head>
<body
    class="kt-header--fixed kt-header-mobile--fixed kt-subheader--fixed kt-subheader--enabled kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading"
    style="background-color: #1c1c1c;">
<div class="kt-grid kt-grid--hor kt-grid--root">
    <div>
        <a style="width: 100px;float: left;margin: 10px;margin-left: 25px;" href="/admin"
           class="btn btn-default btn-elevate btn-icon-sm">
            Logs
        </a>
        <a style="width: 100px;float: left;margin: 10px;margin-left: 25px;" href="/admin/settings"
           class="btn btn-default btn-elevate btn-icon-sm">
            Settings
        </a>
        <a style="width: 100px;float: right;margin: 10px;margin-right: 25px;" href="/admin/logout"
           class="btn btn-danger btn-elevate btn-icon-sm">
            LogOut
        </a>
    </div>
    <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor">
        @yield('content')
    </div>

    <div class="kt-footer kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop"
         style="background-color: #363636;">
        <div class="kt-footer__copyright">
            2022 @dataroq
        </div>
    </div>
</div>
</body>
</html>
