export default function () {
  return (
    <>
      <div class="collapse-plus bg-base-100 border-base-300 collapse border">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div class="collapse-title font-semibold">
          How do I create an account?
        </div>
        <div class="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      <div class="collapse-plus bg-base-100 border-base-300 collapse border">
        <input type="radio" name="my-accordion-3" />
        <div class="collapse-title font-semibold">
          I forgot my password. What should I do?
        </div>
        <div class="collapse-content text-sm">
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </div>
      </div>
      <div class="collapse-plus bg-base-100 border-base-300 collapse border">
        <input type="radio" name="my-accordion-3" />
        <div class="collapse-title font-semibold">
          How do I update my profile information?
        </div>
        <div class="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
    </>
  );
}
