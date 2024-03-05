import { useEffect, useRef } from 'react';
import { SwiperContainer, register } from 'swiper/element/bundle';
import type { SwiperSlideProps, SwiperProps } from 'swiper/react';

declare global {
    namespace JSX {
      interface IntrinsicElements {
        "swiper-container": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement> & SwiperProps,
          HTMLElement
        >;
        "swiper-slide": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
          HTMLElement
        >;
      }
    }
  }
export function Swiper(props: SwiperProps) {
  const swiperRef = useRef<SwiperContainer>(null);
  const {
    children,
    ...rest
  } = props;

  useEffect(() => {
    // Register Swiper web component
    register();

    // pass component props to parameters
    const params = {
      ...rest
    };
    console.log("no entre")
    // initialize swiper
    if (swiperRef.current != null) {
        console.log("no entre")
        Object.assign(swiperRef.current, params);
        // 👉️ TypeScript knows that ref is not null here
        swiperRef.current.initialize();
      }
  }, []);

  return (
    <swiper-container init={false} ref={swiperRef}>
      {children}
    </swiper-container>
  );
}

export function SwiperSlide(props: any) {
  const {
    children,
    ...rest
  } = props;

  return (
    <swiper-slide {...rest}>
      {children}
    </swiper-slide>
  );
}