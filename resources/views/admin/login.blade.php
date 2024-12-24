<html>
<head>
    <title>Admin Panel</title>

    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js?v=<%= new Date().toISOString() %>"></script>
    <script>
        WebFont.load({
            google: {
                "families": ["Montserrat:300,400,500,600,700"]
            },
            active: function() {
                sessionStorage.fonts = true;
            }
        });
    </script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link href="/dash/css/perfect-scrollbar.css" rel="stylesheet" type="text/css" />
    <link href="/dash/css/line-awesome.css" rel="stylesheet" type="text/css" />
    <link href="/dash/css/flaticon.css" rel="stylesheet" type="text/css" />
    <link href="/dash/css/flaticon2.css" rel="stylesheet" type="text/css" />
    <link href="/dash/css/style.bundle.css" rel="stylesheet" type="text/css" />
    <link href="/css/wnoty.css" rel="stylesheet" />
    <link href="/dash/css/datatables.bundle.min.css" rel="stylesheet" type="text/css" />
    <link href="/dash/css/bootstrap-datetimepicker.min.css" rel="stylesheet" type="text/css" />

    <script src="/dash/js/jquery.min.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js?v=<%= new Date().toISOString() %>"></script>
    <script src="/js/wnoty.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script src="/dash/js/popper.min.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script src="/dash/js/bootstrap.min.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script src="/dash/js/bootstrap-datetimepicker.min.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script src="/dash/js/bootstrap-datetimepicker.ru.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script src="/dash/js/bootstrap-datetimepicker.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script src="/dash/js/perfect-scrollbar.min.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script src="/dash/js/scripts.bundle.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script src="/dash/js/datatables.bundle.min.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script src="/dash/js/dtables.js?v=<%= new Date().toISOString() %>" type="text/javascript"></script>
    <script type="text/javascript" src="/js/chart.min.js?v=<%= new Date().toISOString() %>"></script>
    <link rel="stylesheet" href="/css/select2.css">
    <link rel="stylesheet" href="/css/select2-bootstrap4.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/js/select2.min.js?v=<%= new Date().toISOString() %>"></script>
</head>
<body style="background-color: #363636;">
<div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor col-4" style="width: 400px;height: 0px;position: absolute;top: -40%;right: 0;bottom: 0;left: 0;margin: auto;">
    <form class="kt-form" method="post" action="/admin/login">
        @csrf
        <div class="kt-portlet__body">
            <div class="form-group row">
                <div class="col-lg-12" style="color: #ffffff;">
                    <label>Username:</label>
                    <input name="username" type="text" class="form-control">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-12" style="color: #ffffff;">
                    <label>Password:</label>
                    <input name="password" type="password" class="form-control">
                </div>
            </div>
        </div>

        <div class="kt-portlet__foot kt-portlet__foot--solid">
            <div class="kt-form__actions">
                <div class="row">
                    <div class="col-12">
                        <button style="width: 100%;" type="submit" class="btn btn-brand">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
</body>
</html>
