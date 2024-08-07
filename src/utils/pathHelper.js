
export const getArtworkImagePath = (relativePath) => {
    return require(`@assets/artwork/thumbnails/${relativePath}`).default;
  };

  export const getProjectImagePath = (relativePath) => {
    return require(`@assets/projects/images/${relativePath}`).default;
  };