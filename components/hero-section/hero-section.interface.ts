export interface HeroData {
    image: string;
    title: string;
    description: string;
    button: {
        text: string;
    };
}

export interface HeroProps {
    heroData: HeroData;
    handleButton: () => void;
}
