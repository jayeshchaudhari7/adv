export const submitConsultationLeads = async (formData: any) => {
  try {
    const response = await fetch("http://adv-k0e2.onrender.com/api/consultationLeads", {
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