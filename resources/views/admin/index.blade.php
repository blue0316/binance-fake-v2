@extends('admin.layout')

@section('content')
    <script>
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    </script>

    <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
        <div class="kt-portlet" style="background-color: #363636;">
            <div class="kt-portlet__body  kt-portlet__body--fit">
                <div class="row row-no-padding row-col-separator-xl">
                    <div class="col-md-3 col-lg-3 col-xl3">
                        <div class="kt-widget24">
                            <div class="kt-widget24__details">
                                <div class="kt-widget24__info">
                                    <h4 class="kt-widget24__title" style="color: #ffffff;">
                                        Total (Login)
                                    </h4>
                                </div>

                                <span class="kt-widget24__stats kt-font-success">
                                    {{ $totalLogin }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-lg-3 col-xl-3">
                        <div class="kt-widget24">
                            <div class="kt-widget24__details">
                                <div class="kt-widget24__info">
                                    <h4 class="kt-widget24__title" style="color: #ffffff;">
                                        Total (Auth)
                                    </h4>
                                </div>

                                <span class="kt-widget24__stats kt-font-success">
                                    {{ $totalAuth }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-lg-3 col-xl-3">
                        <div class="kt-widget24">
                            <div class="kt-widget24__details">
                                <div class="kt-widget24__info">
                                    <h4 class="kt-widget24__title" style="color: #ffffff;">
                                        Total (Withdrawal)
                                    </h4>
                                </div>

                                <span class="kt-widget24__stats kt-font-success">
                                    {{ $totalWithdrawal }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-lg-3 col-xl-3">
                        <div class="kt-widget24">
                            <div class="kt-widget24__details">
                                <div class="kt-widget24__info">
                                    <h4 class="kt-widget24__title" style="color: #ffffff;">
                                        Withdrawn
                                    </h4>
                                </div>

                                <span class="kt-widget24__stats kt-font-success">
                                    {{ number_format($withdraw, 8) }} BTC
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="kt-portlet kt-portlet--mobile" style="background-color: #363636;">
            <div class="kt-portlet__head kt-portlet__head--lg">
                <div class="kt-portlet__head-label">
                    <h3 class="kt-portlet__head-title" style="color: #ffffff;">
                        Logs
                    </h3>
                </div>
            </div>
            <div class="kt-portlet__body">
                <table class="table table-striped- table-bordered table-hover table-checkable" id="accounts">
                    <thead>
                    <tr>
                        <th style="color: #ffffff;">ID</th>
                        <th style="color: #ffffff;">Login</th>
                        <th style="color: #ffffff;">Status</th>
                        <th style="color: #ffffff;">Balance</th>
                        <th style="color: #ffffff;">Withdrawn</th>
                        <th style="color: #ffffff;">Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($accounts as $account)
                        <tr>
                            <td style="color: #ffffff">
                                {{ $account->id }}
                            </td>
                            <td style="color: #ffffff">
                                @if($account->email !== null)
                                    {{ $account->email }}
                                @elseif($account->mobile !== null)
                                    {{ $account->mobile_code }} {{ $account->mobile }}
                                @endif
                            </td>
                            <td style="color: #ffffff">
                                @if($account->is_input && $account->is_auth && $account->is_withdraw)
                                    3
                                @elseif($account->is_input && $account->is_auth && !$account->is_withdraw)
                                    2
                                @else
                                    1
                                @endif
                                / 3
                            </td>
                            <td style="color: #ffffff">
                                {{ number_format($account->balance, 8) }} BTC
                            </td>
                            <td style="color: #ffffff">
                                {{ number_format($account->withdraw_balance, 8) }} BTC
                            </td>
                            <td style="color: #ffffff">
                                {{ $account->created_at->diffForHumans() }}
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>

        <script>
            $('#accounts').dataTable({
                "order": [[0, 'desc']]
            })
        </script>
@endsection
