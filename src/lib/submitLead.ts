export const submitLead = async (formData: any) => {
  try {
    const response = await fetch("https://adv-x33r.onrender.com/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    return await response.json();
  } catch (error) {
    console.error("Submit Error:", error);
    throw error;
  }
};