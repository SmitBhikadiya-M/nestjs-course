import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private itemService: ItemsService) {}

  // @Get() // GET /items
  // findAll( @Req() req:Request, @Res() res:Response ): Response{
  //     console.log(req.url);
  //     return res.send('Hello World');
  // }

  @Get() // GET /items
  async findAll(): Promise<Item[]> {
    return await this.itemService.findAll();
  }

  @Get(':id') // GET /items/10
  async findOne(@Param() param): Promise<Item> {
    return await this.itemService.findOne(param.id);
  }

  @Post() // POST /items
  async create(@Body() bodyRequest: Item) {
    return await this.itemService.create(bodyRequest);
  }

  @Delete(':id') // DEL /items/10
  async delete(@Param('id') id): Promise<Item> {
    return await this.itemService.delete(id);
  }

  @Put(':id') // PUT /items/5
  async update(@Param('id') id, @Body() body: Item): Promise<Item> {
    return await this.itemService.update(id, body);
  }
}
