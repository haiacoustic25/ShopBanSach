<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbDetailCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_detail_carts', function (Blueprint $table) {
			$table->unsignedBigInteger('cart_id');
			$table->unsignedBigInteger('book_id');
			$table->integer('gh_amount');
			$table->timestamps();
			$table->primary(['cart_id','book_id']);


        });
		Schema::table('tb_detail_carts', function(Blueprint $table)
		{
			$table->foreign('cart_id')->references('id')->on('tb_carts')
											   ->onUpdate('restrict')
											   ->onDelete('cascade');
			$table->foreign('book_id')->references('id')->on('tb_books')
											   ->onUpdate('restrict')
											   ->onDelete('cascade');
		});

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_detail_carts');
    }
}
