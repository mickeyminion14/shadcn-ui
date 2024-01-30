export interface HeroData {
    image: string;
    title?: string;
    description?: string;
    button?: {
        text?: string;
        navigateTo?: string;
        link?: boolean;
    };
}

export interface HeroProps {
    heroData: HeroData;
}
