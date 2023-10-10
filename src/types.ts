import { RefObject } from 'react';

export interface IMainProps {
    sections: ISectionInfo[];
};
export interface ISectionInfo {
    name: string;
    fComponent: React.ReactNode;
};

export interface IHeaderProps {
    scrollHandle: (section: number) => void;
    sections: ISectionInfo[];
};

export interface IThemeProviderProps {
    children: React.ReactNode;
};
export interface IPartialInfoProps {
    title: string;
    description: string;
    dLength: number;
    isOpen: boolean;
    openHandle: () => void;
};
export interface IBlockProps {
    theme: TThemes;
    title: string;
    imglink?: string;
    dLength?: number;
    description: string;
};
export interface IPartialImgBoxProps {
    imglink?: string;
};

export interface IThemeProps {
    theme: TThemes;
}

export interface INavButtonProps {
    name: string;
    callback: () => void;
};

export interface ISkillBlockProps {
    img: string;
    title: string;
    list: string[];
    theme: TThemes;
};
export interface ISectionTitleProps {
    title: string;
};
export interface ISkillBlockInfoProps {
    title: string;
    list: string[];
};

export interface IExpertiseInfo {
	title: string;
	description: string;
	dLength?: number;
	imglink?: string;
};

export interface IUseScrollReturn {
    refs: TRefsArray;
    scrollHandle: (index: number) => void;
};

export interface IProjectBlockProps {
    title: string;
    date?: string;
    img: string;
    description: string;
    content: string;
    github?: string;
};

export interface IAvatarProps {
    onLoaded: () => void;
};

export type TThemes = 'dark' | 'light';

export type TThemeValue = {
    theme: TThemes;
    changeTheme: (theme: TThemes) => void;
    isChanged: boolean;
} | undefined;

export type TRefsArray = RefObject<HTMLDivElement>[];