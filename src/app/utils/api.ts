export const mockSubmit = async (data: any) => {
  console.log("Submitted Data:", data);
  // simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { success: true };
};
