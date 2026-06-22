"use client";

import { useState } from "react";

export default function DropsSignupCard() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/drops/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className="drops-signup-card">
      <div className="drops-signup-card__kicker">Email layer</div>
      <h2>Read the library here. Get future Drops by email.</h2>
      <p>
        The website page is the source of truth. The email version is the lighter
        delivery layer after each Drop has a permanent home here.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="drops-signup-form">
          <label className="drops-signup-form__label" htmlFor="drops-email">
            Email address
          </label>
          <input
            id="drops-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@business.com"
            className="drops-signup-form__input"
            required
          />
          {error ? <p className="drops-signup-form__error">{error}</p> : null}
          <button
            type="submit"
            className="btn btn--primary drops-signup-form__button"
            disabled={loading}
          >
            {loading ? "Joining..." : "Get future Drops by email"}
          </button>
          <p className="drops-signup-form__fine-print">
            One list. One signup path. Built on the same Kit account you already use.
          </p>
        </form>
      ) : (
        <div className="drops-signup-card__note">
          You&apos;re in. Future Drops will come to your inbox.
        </div>
      )}
    </aside>
  );
}
