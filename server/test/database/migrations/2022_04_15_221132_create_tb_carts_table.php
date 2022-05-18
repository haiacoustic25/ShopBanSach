<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_carts', function (Blueprint $table) {
			$table->id();
			$table->string('username');
            $table->timestamps();
		});

		Schema::table('tb_carts', function (Blueprint $table)
		{
			$table->foreign('username')->references('username')->on('users');
		});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_carts');
    }
}
