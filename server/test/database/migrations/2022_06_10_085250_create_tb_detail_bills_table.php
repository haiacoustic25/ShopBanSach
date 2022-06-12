<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbDetailBillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_detail_bills', function (Blueprint $table) {
            $table->unsignedBigInteger('bill_id');
			$table->unsignedBigInteger('book_id');
			$table->integer('book_quantity');
            $table->integer('book_price');
			$table->timestamps();
			$table->primary(['bill_id','book_id']);


        });
		Schema::table('tb_detail_bills', function(Blueprint $table)
		{
			$table->foreign('bill_id')->references('id')->on('tb_bills')
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
        Schema::dropIfExists('tb_detail_bills');
    }
}
