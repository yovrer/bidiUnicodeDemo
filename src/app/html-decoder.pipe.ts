import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'HtmlDecoderPipe'
})
export class HtmlDecoderPipePipe implements PipeTransform {
  transform(value: string) {
    if (value) {
      const doc = new DOMParser().parseFromString(value, 'text/html');
      return doc.documentElement.textContent;
    }
    return value;
  }

}
