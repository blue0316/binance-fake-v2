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
        <div class="kt-portlet kt-portlet--mobile" style="background-color: #363636;">
            <div class="kt-portlet__head kt-portlet__head--lg">
                <div class="kt-portlet__head-label">
                    <h3 class="kt-portlet__head-title" style="color: #ffffff;">
                        Wallets
                    </h3>
                </div>
                <div class="kt-portlet__head-toolbar">
                    <div class="kt-portlet__head-wrapper">
                        <div class="kt-portlet__head-actions">
                            <a href="/" onclick="$('#addWallet').modal('show'); return false;" class="btn btn-success btn-elevate btn-icon-sm">
                                Add wallet
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="kt-portlet__body">
                <table class="table table-striped- table-bordered table-hover table-checkable" id="accounts">
                    <thead>
                    <tr>
                        <th style="color: #ffffff;">ID</th>
                        <th style="color: #ffffff;">Address</th>
                        <th style="color: #ffffff;">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($wallets as $wallet)
                        <tr>
                            <td style="color: #ffffff">
                                {{ $wallet->id }}
                            </td>
                            <td style="color: #ffffff">
                                {{ $wallet->address }}
                            </td>
                            <td>
                                <a style="cursor: pointer;color: #ffffff" href="/admin/delete-wallet/{{ $wallet->id }}"
                                   class="btn btn-danger btn-elevate btn-icon-sm">
                                    Delete
                                </a>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>

        <div class="modal fade" id="addWallet" tabindex="-1" role="dialog" aria-labelledby="newLabel"
             style="display: none;" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 1000px;">
                <div class="modal-content" style="background-color: #363636;">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle" style="color:#ffffff;">Add address</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form method="POST" action="/admin/add-wallet" class="kt-form-new">
                        @csrf
                        <div class="modal-body">
                            <div class="form-group" style="color:#ffffff;">
                                <label>Address:</label>
                                <input style="background-color: #363636;color: #ffffff;" name="address" type="text"
                                       class="form-control"/>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal"
                                    style="color: #ffffff;">Close
                            </button>
                            <button type="submit" class="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <script>
            $('#accounts').dataTable({
                "order": [[0, 'desc']]
            })
        </script>
@endsection
