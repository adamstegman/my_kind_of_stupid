---
title: Silence Test::Unit tests
created_at: 2011-04-19T04:20Z
---
I've written several tests that have the unfortunate side effect of writing to stdout or stderr, polluting my pretty stream of dots.

Thanks to a [post on Benevolent Code][post], I decided to silence them ([gist](https://gist.github.com/adamstegman/926853)).

    setup :silence_output

    # Redirects stderr and stdout to /dev/null.
    def silence_output
      @orig_stderr = $stderr
      @orig_stdout = $stdout

      # redirect stderr and stdout to /dev/null
      $stderr = File.new('/dev/null', 'w')
      $stdout = File.new('/dev/null', 'w')
    end

    teardown :enable_output

    # Replace stdout and stderr so anything else is output correctly.
    def enable_output
      $stderr = @orig_stderr
      $stdout = @orig_stdout
      @orig_stderr = nil
      @orig_stdout = nil
    end

Update:

The same thing in RSpec ([gist](https://gist.github.com/926858)):

    RSpec.configure do |config|
      config.before(:all, &:silence_output)
      config.after(:all, &:enable_output)
    end

    # Redirects stderr and stdout to /dev/null.
    def silence_output
      @orig_stderr = $stderr
      @orig_stdout = $stdout

      # redirect stderr and stdout to /dev/null
      $stderr = File.new('/dev/null', 'w')
      $stdout = File.new('/dev/null', 'w')
    end

    # Replace stdout and stderr so anything else is output correctly.
    def enable_output
      $stderr = @orig_stderr
      $stdout = @orig_stdout
      @orig_stderr = nil
      @orig_stdout = nil
    end

[post]: http://benevolentcode.com/2011/03/temporarily-redirect-stdout-in-ruby/
