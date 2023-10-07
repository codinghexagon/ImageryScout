import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    Details: { itemId: number; otherParam?: string };
    image: { imageId: string };
  };
  
 export type ImageType = {
    id: string;
    urls: {
      small: string;
    };
  };

export type HomeProps = StackScreenProps<RootStackParamList, "Home">;


export type HomeType =React.FC<HomeProps>

export type SearchFieldProps = {
  onSearch: (query: string) => void;
};

export type SearchFieldType =React.FC<SearchFieldProps>
