import { RefObject } from 'react';

interface ISectionInfo {
    name: string;
    fComponent: React.ReactNode;
};
export type TRefsArray = RefObject<HTMLDivElement>[];
export interface IMainProps {
    sections: ISectionInfo[];
};

export interface IHeaderProps {
    scrollHandle: (section: number) => void;
    sections: ISectionInfo[];
};
export interface INavButtonProps {
    name: string;
    callback: () => void;
};

export interface ISectionTitleProps {
    title: string;
};

export interface IExpertiseInfo {
	title: string;
	description: string;
	dLength?: number;
	imglink?: string;
};

export interface IAvatarProps {
    onLoaded: () => void;
};

export interface IPartialInfoProps {
    title: string;
    description: string;
    dLength: number;
    isOpen: boolean;
    openHandle: () => void;
};
export interface IPartialImgBoxProps {
    imglink?: string;
};
export interface IBlockProps {
    theme: TThemes;
    title: string;
    imglink?: string;
    dLength?: number;
    description: string;
};

export interface IUseScrollReturn {
    refs: TRefsArray;
    scrollHandle: (index: number) => void;
};

export type TThemes = 'dark' | 'light';
export type TThemeValue = {
    theme: TThemes;
    changeTheme: (theme: TThemes) => void;
    isChanged: boolean;
} | undefined;
export interface IThemeProps {
    theme: TThemes;
};
export interface IThemeProviderProps {
    children: React.ReactNode;
};