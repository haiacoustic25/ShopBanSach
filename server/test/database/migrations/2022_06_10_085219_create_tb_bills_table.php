<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbBillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_bills', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("cart_id");
            // $table->string('bill_name');
			$table->string('bill_address');
            $table->string('bill_email');
			$table->string('bill_phone');
            $table->integer('bill_total');
            $table->string('status')->default('Pending') ;
            $table->timestamps();
        });
        Schema::table('tb_bills', function (Blueprint $table)
		{
			$table->foreign('cart_id')->references('id')->on('tb_carts');
		});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_bills');
    }
}