declare module '*.module.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';
declare module '*.svg';
declare module '*.pdf';
declare module '*.mp4';
declare module '*.webm';
declare const __PLATFORM__: 'mobile' | 'desktop'