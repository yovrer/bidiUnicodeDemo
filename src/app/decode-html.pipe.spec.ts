import { HtmlDecoderPipePipe } from './html-decoder.pipe';

describe('DecodeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new HtmlDecoderPipePipe();
    expect(pipe).toBeTruthy();
  });
});
