import { ServicesManager } from "@app/helper/ServiceManager";

class PreadmissionServices {
  private static axiosInstance = new ServicesManager(ServicesManager.PREADMISSION_URL).getAxiosInstance(false);

  public static getRecipeById = async (id: string): Promise<IRecipe> => {
    const res = await this.axiosInstance.get(`/recipes?${id}`);
    return res.data;
  };
}

export default PreadmissionServices;
