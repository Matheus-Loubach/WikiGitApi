export interface IItensUser{
    itens:{
      id: number;
      name: string;
      avatar_url: string;
      html_url: string;
      blog: string;
      location?: string;
      bio: string;
    };
    handleRemoveUser: (id: number) => void;
  }
  