import { render } from '@testing-library/react';

import ExternalAnchor from '.';

describe('ExternalAnchor', () => {
  it('should show as expected', () => {
    const { container } = render(
      <ExternalAnchor href="https://yasuomaverick.kuman514.xyz/">
        야스오매버릭 홈페이지로 가기
      </ExternalAnchor>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a link that equals the href & _blank as the default target', () => {
    const { container } = render(
      <ExternalAnchor href="https://yasuomaverick.kuman514.xyz/">
        야스오매버릭 홈페이지로 가기
      </ExternalAnchor>
    );
    expect((container.firstChild as HTMLAnchorElement).href).toStrictEqual(
      'https://yasuomaverick.kuman514.xyz/'
    );
    expect((container.firstChild as HTMLAnchorElement).target).toStrictEqual(
      '_blank'
    );
  });

  it('should have custom target & custom class name', () => {
    const { container } = render(
      <ExternalAnchor
        href="https://yasuomaverick.kuman514.xyz/"
        customTarget="_parent"
        customClassName="text-2xl underline"
      >
        야스오매버릭 홈페이지로 가기
      </ExternalAnchor>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect((container.firstChild as HTMLAnchorElement).target).toStrictEqual(
      '_parent'
    );
  });
});
