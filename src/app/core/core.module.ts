import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LowercaseValidator } from './lowercase.validator';
import { UppercaseValidator } from './uppercase.validator';

@NgModule({
    imports: [HttpClientModule],
    declarations: [LowercaseValidator, UppercaseValidator],
    exports: [LowercaseValidator, UppercaseValidator],
})
export class CoreModule {}
