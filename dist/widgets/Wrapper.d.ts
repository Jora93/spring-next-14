import { ReactElement, ReactNode } from 'react';

export type TWrapperProps = {
    children: ReactNode;
    mode?: 'builder' | 'public';
};
export declare const WidgetWrapper: ({ children }: TWrapperProps) => ReactElement;
