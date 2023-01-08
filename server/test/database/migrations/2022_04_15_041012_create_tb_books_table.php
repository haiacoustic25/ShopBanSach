<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_books', function (Blueprint $table) {
			$table->id();
			$table->string('s_name');
			$table->longText('s_description');
			$table->decimal('s_price',10,0);
            $table->decimal('s_newPrice',10,0);
			$table->string('s_nsx');
			$table->string('s_image')->default('test.jpg');
			$table->integer('s_amount');
            $table->integer('s_status');
            $table->integer('s_discount');
			$table->unsignedBigInteger('author_id');
			$table->unsignedBigInteger('category_id');
            $table->timestamps();
		});

		Schema::table('tb_books', function (Blueprint $table){
			$table->foreign('author_id')->references('id')->on('tb_authors');
			$table->foreign('category_id')->references('id')->on('tb_categories');
		});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_books');
    }
}
