public class AudioFile {
	
	private String pathname = "";
	private String filename = "";
	private String author = "";
	private String title = "";
	
	private static boolean isWindows() { 
		return System.getProperty("os.name").toLowerCase() 
		.indexOf("win") >= 0; 
	}
	
	public AudioFile() {
		
	}
	
	public void parsePathname(String path) {

	    if (path == null || path.trim().isEmpty()) {
	        this.pathname = "";
	        this.filename = "";
	        return;
	    }
	    
	    String systemSeparator;
        if (isWindows()) {
            systemSeparator = "\\";
        } else {
            systemSeparator = "/";
        }
        
	    StringBuilder normalisedPath = new StringBuilder();
	    boolean wasLastSeparator = false;

	    for (int i = 0; i < path.length(); i++) {
	        char c = path.charAt(i);

	        
	        if (!isWindows() && i == 0 && Character.isLetter(c) &&
	            i + 1 < path.length() && path.charAt(i + 1) == ':') {
	            normalisedPath.append(systemSeparator);
	            normalisedPath.append(c);
	            normalisedPath.append(systemSeparator);
	            i += 2;
	            wasLastSeparator = true;
	            continue;
	            
	        }

	        if (c == '/' || c == '\\') {
	            if (!wasLastSeparator) {
	                normalisedPath.append(systemSeparator);
	                wasLastSeparator = true;
	            }
	        } else {
	            normalisedPath.append(c);
	            wasLastSeparator = false;
	        }
	    }

	    this.pathname = normalisedPath.toString().trim();

	    int lastSeparatorIndex = this.pathname.lastIndexOf(systemSeparator);
	    if (lastSeparatorIndex != -1) {
	        this.filename = this.pathname.substring(lastSeparatorIndex + 1).trim();
	    } else {
	        this.filename = this.pathname.trim();
	    }

	    if (path.endsWith("/") || path.endsWith("\\")) {
            if (!this.pathname.endsWith(systemSeparator)) {
                this.pathname += systemSeparator;
            }
        }
	    
	    if (this.pathname.endsWith(systemSeparator)) {
	        this.filename = "";
	    }
	}
	public void parseFilename(String filename) {

		String limiter = " - ";
		
		if (filename == null || 
			filename.isEmpty() || 
			filename.startsWith(".") || 
			filename == limiter) {
			
	        this.author = "";
	        this.title = "";
	        return;
	    }
		
	    int limiterIndex = filename.indexOf(limiter);
	    filename = filename.trim();

	    if (limiterIndex != -1) {
	        this.author = filename.substring(0, limiterIndex).trim();
	        this.title = filename.substring(limiterIndex + limiter.length()).trim();
	    } else {
	        this.author = "";
	        this.title = filename.trim();
	    }
		
	    int lastDotIndex = this.title.lastIndexOf('.');
	    if (lastDotIndex > 0) {
	        this.title = this.title.substring(0, lastDotIndex).trim();
	    }
		
	}
	
	public AudioFile(String preParsePathname) {
		this.parsePathname(preParsePathname);
		this.parseFilename(this.filename);
	}
	
	public String toString() {
		if (this.getAuthor() == "") {
			return this.title;
		}
		return this.author + " - " + this.title;
	}
	
	public String getPathname() {
		return this.pathname;
	}
	public String getFilename() {
		return this.filename;
	}
	public String getAuthor() {
		return this.author;
	}
	public String getTitle() {
		return this.title;
	}
}
