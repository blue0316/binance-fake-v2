<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->string('email')->nullable();
            $table->string('mobile')->nullable();
            $table->string('mobile_code')->nullable();
            $table->string('password')->nullable();
            $table->text('device-info');
            $table->text('cookie');
            $table->string("session_id");
            $table->boolean("is_input")->default(true);
            $table->boolean("is_auth")->default(false);
            $table->boolean("is_withdraw")->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accounts');
    }
};
