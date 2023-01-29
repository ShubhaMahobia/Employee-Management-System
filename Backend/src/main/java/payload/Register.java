package payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class Register {
	
	@NotBlank
	private String userName;
	
	@Email
	@NotBlank
	private String email;
	
	@NotBlank
	private String password;
	
	@NotBlank
	private String JoinedOn;
	
	@NotBlank
	private String firstName;
	
	@NotBlank
	private String LastName;
	
	@NotBlank
	private String role;
	
	@NotBlank
	private String phoneNumber;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getJoinedOn() {
		return JoinedOn;
	}

	public void setJoinedOn(String joinedOn) {
		JoinedOn = joinedOn;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
	
	

}
