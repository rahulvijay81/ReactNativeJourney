  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.post(
          `${API_BASE_URL}/employee`,
          { employeeBUID },
          {
            headers: {
              Authorization: `Bearer ${logInToken}`,
              UserId: `${userId}`,
            },
          }
        );
        console.log(response.data);
        setEmployees(response.data);
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    };

    fetchData();
  }, [logInToken, userId, employeeBUID]);