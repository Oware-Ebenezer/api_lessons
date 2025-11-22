import React, { useState } from "react";

const Api = () => {
  const [postId, setPostId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePut = async () => {
    if (!postId || !title || !body) {
      setError("All fields are required.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: postId, title, body }),
        }
      );

      const result = await res.json();
      setResponse(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePatch = async () => {
    if (!postId || !title) {
      setError("Post ID and Title are required for PATCH.");
      return;
    }

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: "PATCH",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({ title }),
        }
      );

      const result = await res.json();
      setResponse(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-amber-50 py-10 items-center">
      <h1 className="text-2xl font-bold mb-6">Update Post</h1>
      <section className="flex flex-col gap-3 w-11/12 md:w-2/5 mb-6">
        <input
          type="number"
          value={postId}
          placeholder="Enter Post ID"
          onChange={(e) => setPostId(e.target.value)}
          className="border border-gray-800 px-3 py-2 rounded-md"
        />
        <input
          type="text"
          value={title}
          placeholder="Enter new title"
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-800 px-3 py-2 rounded-md"
        />

        <textarea
          value={body}
          placeholder="Enter a new body (for PUT)"
          onChange={(e) => setBody(e.target.value)}
          className="border border-gray-800 px-3 py-2 rounded-md"
          rows="4"
        ></textarea>
      </section>

      <section className="flex gap-4">
        <button
          onClick={handlePut}
          className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
          disabled={loading}
        >
          Replace Post (PUT)
        </button>
        <button
          onClick={handlePatch}
          className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition"
          disabled={loading}
        >
          Update Title (PATCH)
        </button>
      </section>

      {loading && <p className="text-gray-400">Processing..........</p>}
      {error && <p className="text-red-400">{error}</p>}

      {response && (
        <section className="bg-white shadow-md p-4 rounded-md w-11/12 md:w-2/5">
          <h2 className="text-xl font-semibold mb-2">Updated Post</h2>
          <p>
            <strong>ID: </strong>
            {response.id}
          </p>
          <p>
            <strong>Title: </strong>
            {response.title}
          </p>
          <p>
            <strong>Body: </strong>
            {response.body}
          </p>
        </section>
      )}
    </main>
  );
};

export default Api;
